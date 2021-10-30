import React from 'react'
import '../../assets/welcome.css'

function Welcome( {name, formIsValid, setFormIsValid } ) {
  const handleClick = () => {
   setFormIsValid(!formIsValid)
  }

  return (
    <div className={formIsValid ? "welcome welcome_active" : "welcome"}>
      <h2>Welcome</h2>
      <h2>{name}</h2>
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
