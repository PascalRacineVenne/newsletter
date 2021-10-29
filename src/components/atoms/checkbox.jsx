import React from 'react'

const Checkbox = ({ label, value, onChange }) => {
  const label_style = {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'var(--body-font)',
    fontSize: "13px",
    color: 'rgba(0,0,0,0.4)'
  }

  const checkbox = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '8px'
  }

  return(
    <div style={checkbox}>
      <label style={label_style}>
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  )
}

export default Checkbox;
