import React from 'react'
// import { validEmail, isEmpty } from './regex.jsx'

const ValidationButton = (props) => {
  // const [name, setName] = useState('');
  // const [company, setCompany] = useState('');
  // const [email, setEmail] = useState('');
  // const [nameErr, setNameErr] = useState(false);
  // const [companyErr, setCompanyErr] = useState(false);
  // const [emailErr, setEmailErr] = useState(false);

  // const validation = () => {
  //   if (!validEmail.test(email)) {
  //     setEmailErr(true);
  //   }
  //   if (isEmpty.test(name)) {
  //     setNameErr(true);
  //   }
  //   if (isEmpty.test(company)) {
  //     setCompanyErr(true);
  //   }
  // }

  return (
    <div>
      <button onClick={props.onClick}>Validate</button>
{/*     {nameErr && <p>invalid name</p>}
        {companyErr && <p>invalid company name</p>}
        {emailErr && <p>invalid email</p>}*/}
    </div>
  )
}

export default ValidationButton
