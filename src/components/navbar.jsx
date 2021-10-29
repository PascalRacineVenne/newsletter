import React from 'react'
import MainLogo from './atoms/main_logo'

function Navbar() {
  const style = {
    color: 'var(--primary_green)',
    background: 'white',
    width: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: '0 auto',
    borderBottom: '1px solid #e4e4e4',
  }

  const title = {
    fontFamily: 'var(--secondary_font)',
    fontWeight: 'bold',
  }

  return(
    <div className="navbar" style={style}>
      <MainLogo />
      <p style={title}>Pascal Racine-Venne's demo</p>
    </div>
  )
}

export default Navbar
