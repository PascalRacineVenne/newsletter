import React from 'react'
import '../../assets/welcome.css'

function Welcome(props) {
  return (
    <div className={props.formIsValid ? "welcome_active" : "welcome"}>
      <h2>Welcome</h2>
      <h2>{props.name}</h2>
      <p>Glad you've joined us!</p>
    </div>
  )
}

export default Welcome;
