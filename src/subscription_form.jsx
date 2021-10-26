import React, { useState } from 'react'
import { validEmail, isEmpty } from './regex.jsx'
import Input from './input.jsx';
import Button from './button.jsx';

function SubscriptionForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  const [nameErr, setNameErr] = useState(false);
  const [companyErr, setCompanyErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  const [check, setCheck] = useState(false);

  const handleSubmit = () => {
    let formIsValid = true
    if (isEmpty.test(name)) {
      setNameErr(true);
      formIsValid = false
    }
    if (isEmpty.test(company)) {
      setCompanyErr(true);
      formIsValid = false
    }
    if (!validEmail.test(email)) {
      setEmailErr(true);
      formIsValid = false
    }
    // if check is true and 3 previous condition are true then welcome
    if (check && formIsValid) {
      console.log('everything works');
    }
    return formIsValid
  }

  const handleClear = () => {
    setName("")
    setNameErr(false)
    setCompany("")
    setCompanyErr(false)
    setEmail("")
    setEmailErr(false)
    if (check === true) {
      setCheck(false)
    }
  }
  return(
    <div className="form">
       <div className="input_field">
        <Input
          type="text"
          placeholder="enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <Input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <label className="checkbox">
        <Input
          type="checkbox"
          placeholder="agreement"
          checked={check}
          onChange={() => setCheck(!check)}
        />
        Subscription Agreement
      </label>
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
      <div className="errors">
        {nameErr && <p>invalid name</p>}
        {companyErr && <p>invalid company name</p>}
        {emailErr && <p>invalid email</p>}
      </div>
    </div>
  )
}

export default SubscriptionForm;
