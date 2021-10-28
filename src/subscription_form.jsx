import React, { useState } from 'react'
import { validEmail, isEmpty } from './regex.jsx'
import Input from './input.jsx';
import Button from './button.jsx';
import Checkbox from './checkbox.jsx'
import Welcome from './welcome.jsx'

import './subscription_form.css'

function SubscriptionForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  // const [nameErr, setNameErr] = useState(false);
  // const [companyErr, setCompanyErr] = useState(false);
  const [inputErr, setInputErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  const [check, setCheck] = useState(false);

  const handleSubmit = () => {
    let formIsValid = true
    // if (isEmpty.test(name)) {
    //   setNameErr(true);
    //   formIsValid = false
    // }
    // if (isEmpty.test(company)) {
    //   setCompanyErr(true);
    //   formIsValid = false
    // }
    if (isEmpty.test(name) || isEmpty.test(company)) {
      setInputErr(true);
      formIsValid = false
    }

    if (!validEmail.test(email)) {
      setEmailErr(true);
      formIsValid = false
    }
    // if check is true and 3 previous condition are true then welcome
    if (check === false) {
      formIsValid = false
    }
    return formIsValid
  }

  const handleClear = () => {
    // setName("")
    // setNameErr(false)
    // setCompany("")
    // setCompanyErr(false)
    setInputErr(false)
    setEmail("")
    setEmailErr(false)
    if (check === true) {
      setCheck(false)
    }
  }

  return(
    <div className="container">
      <div className="form">
        <div className="input_fields">
          <div className="errors">
            {inputErr && <p className="error">Invalid input</p>}
            {emailErr && <p className="error">Invalid email address</p>}
          </div>
          <Input
            type="text"
            placeholder="enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input_field"
          />
          {/*{nameErr && <p className="errors">invalid value</p>}*/}
          <Input
            type="text"
            placeholder="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="input_field"
          />
          {/*{companyErr && <p className="errors">invalid company name</p>}*/}
          <Input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input_field"
          />
        </div>

        <label className="label">
          <Checkbox
            placeholder="agreement"
            checked={check}
            onChange={() => setCheck(!check)}
          />
          Terms and conditions
        </label>

{/*        <label className="checkbox_label">
          <Input
            type="checkbox"
            placeholder="agreement"
            checked={check}
            onChange={() => setCheck(!check)}
            className="checkbox"
          />
          Subscription Agreement
        </label>*/}

        <div className="btn">
          <Button
            name="Sign Up"
            onClick={handleSubmit}
          />
          <Button
            name="Clear"
            onClick={handleClear}
          />
        </div>
      </div>
    </div>
  )
}

export default SubscriptionForm;
