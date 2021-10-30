import React from 'react'
import '../../assets/welcome.css'

function Welcome(props) {
  const handleClick = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <div className={props.formIsValid ? "welcome_active" : "welcome"}>
      <h2>Welcome</h2>
      <h2>{props.name}</h2>
      <p>Glad you've joined us!</p>
      <button
        id='close'
        onClick={handleClick}
      >close
      </button>
    </div>
  )
}

export default Welcome;
