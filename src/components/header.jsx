import React from 'react'

function Header() {
  const style = {
    margin: '148px auto 8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0 64px',
  }

  const h1_style = {
    margin: '20px 0',
  }

  return (
    <div className="header" style={style}>
      <h1 style = {h1_style}>Newsletter subscription form</h1>
      <div>
        <p>This is a demo of an email subscription form built with React.js</p>
      </div>
    </div>
  )
}

export default Header
