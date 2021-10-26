import React, { useState } from 'react'
import { validEmail, isEmpty } from './regex.jsx'
import Input from './input.jsx';
import ValidationButton from './validation_button.jsx';
import Welcome from './welcome.jsx'

import './App.css';

function App() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  const [nameErr, setNameErr] = useState(false);
  const [companyErr, setCompanyErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  const [check, setCheck] = useState(false);

  const handleCheckChange = () => {
    setCheck(!check)
  }

  const handleSubmit = () => {
    if (isEmpty.test(name)) {
      setNameErr(true);
    }
    if (isEmpty.test(company)) {
      setCompanyErr(true);
    }
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    // if check is true and 3 previous condition are true then welcome
    if (check === true) {
      console.log('everything works');
    }
  }

  return (
    <div className="App">
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
          value={check}
          onChange={handleCheckChange}
        />
        Subscription Agreement
      </label>

      <ValidationButton
        onClick={handleSubmit}
      />
      <div className="errors">
        {nameErr && <p>invalid name</p>}
        {companyErr && <p>invalid company name</p>}
        {emailErr && <p>invalid email</p>}
      </div>
    </div>
  )
}

export default App;
