import React, { useState } from 'react'

const EmailInput = () => {
  const [email, setEmail] = useState('');
  // const [emailErr, setEmailErr] = useState(false);
  // const validation = () => {
  //   if (!validEmail.test(email)) {
  //     setEmailErr(true);
  //   }
  // }
  return (
    <div>
      <input
        type="text"
        placeholder = "email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
{/*      <button onClick={validation}>Validate</button>
      {emailErr && <p>invalid email</p>}*/}
    </div>
  )
}

export default EmailInput;
