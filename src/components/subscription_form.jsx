import React, { useState } from 'react'
import { validEmail, isEmpty } from './atoms/regex.jsx'
import Input from './atoms/input.jsx';
import Button from './atoms/button.jsx';
import Checkbox from './atoms/checkbox.jsx'
import Welcome from './atoms/welcome.jsx'

import '../assets/subscription_form.css'

function SubscriptionForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [inputErr, setInputErr] = useState(false);
  const [check, setCheck] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false)

  const handleSubmit = () => {
    if (!isEmpty.test(name) && !isEmpty.test(company) && validEmail.test(email) && check === true) {
      setFormIsValid(true);
    } else {
      setInputErr(true);
      setFormIsValid(false);
    }
    return formIsValid
  }

  const handleClear = () => {
    // e.preventDefault();
    setName("")
    setCompany("")
    setInputErr(false)
    setEmail("")
    setCheck(false)
    setFormIsValid(false)
  }

  return(
    <div className="container">
      <div className={formIsValid ? "errors" : "errors_active"}>
        {inputErr && <p className="error">Please enter valid informations.</p>}
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
          value={check}
          onChange={() => setCheck(!check)}
        />

        <Welcome
          name={name}
          formIsValid={formIsValid}
          setFormIsValid= {setFormIsValid}
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
