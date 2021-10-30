import React from 'react'

const Button = (props) => {
  const style = {
    width: '284px',
    height: '30px',
    margin: '4px 0',
    backgroundColor: 'var(--primary_green)',
    fontFamily: 'var(--secondary_font)',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius:'25px',
  }

  return (
    <div>
      <button
        onClick={props.onClick}
        style={style}>
        {props.name}
      </button>
    </div>
  )
}

export default Button
