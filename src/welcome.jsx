import React from 'react'
import './welcome.css'

function Welcome(props) {

  return (
    <div className={props.formIsValid ? "welcome_active" : "welcome"}>
      <h2>Welcome {props.name}</h2>
      <p>Glad you've joined us!</p>
    </div>
  )
}

export default Welcome;
