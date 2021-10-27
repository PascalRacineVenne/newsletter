import React from 'react'

const Button = (props) => {
  const style = {
    width: '230px',
    height: '30px',
    margin: '4px',
    backgroundColor: 'var(--primary_green)',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
  }

  return (
    <div>
      <button onClick={props.onClick} style={style}>{props.name}</button>
    </div>
  )
}

export default Button
