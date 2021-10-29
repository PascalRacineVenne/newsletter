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
  const [inputErr, setInputErr] = useState(false);
  const [check, setCheck] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false)

  // const [nameErr, setNameErr] = useState(false);
  // const [companyErr, setCompanyErr] = useState(false);
  // const [emailErr, setEmailErr] = useState(false);



  const handleSubmit = () => {
    if (isEmpty.test(name) || isEmpty.test(company) || !validEmail.test(email)) {
      setInputErr(true);
      setFormIsValid(false);
    }
    if (check === true) {
      setFormIsValid(true)
    }
    return formIsValid
  }

  const handleClear = () => {
    setName("")
    setCompany("")
    setInputErr(false)
    setEmail("")
    // setEmailErr(false)
    if (check === true) {
      setCheck(false)
    }
    setFormIsValid(false)
  }

  return(
    <div className="container">
      <div className={formIsValid ? "errors" : "errors_active"}>
      {/*<div className="errors">*/}
        {inputErr && <p className="error">There was a problem with your request.</p>}
        {/*{emailErr && <p className="error">*** Invalid email address</p>}*/}
      </div>
      <div className="form">
        <div className="input_fields">
          <Input
            type="text"
            placeholder="enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input_field"
          />
          <Input
            type="text"
            placeholder="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="input_field"
          />
          <Input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input_field"
          />
        </div>

        <Checkbox
          label="I agree to subscribe this newsletter"
          checked={check}
          onChange={() => setCheck(!check)}
        />

        <Welcome
          name={name}
          formIsValid={formIsValid}
        />

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
