import React from 'react';

function Input( {type, placeholder, value, onChange} ) {
  return(
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input_field"
    />
  )
}

export default Input
