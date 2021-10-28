import React from 'react'

const Checkbox = (props) => {
  return(
    <input
      type="checkbox"
      placeholder={props.placeholder}
      checked={props.checked}
      onChange={props.onChange}
      className="checkbox"
    />
  )
}

export default Checkbox;
