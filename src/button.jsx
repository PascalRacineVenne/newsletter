import React from 'react'
// import { validEmail, isEmpty } from './regex.jsx'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.name}</button>
    </div>
  )
}

export default Button
