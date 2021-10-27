import React from 'react'

function Navbar() {
  const style = {
    color: 'var(--primary_green)',
    background: 'white',
    width: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    padding: '16px 64px',
    borderBottom: '1px solid #e4e4e4',
  }

  return(
    <div className="navbar" style={style}>
      <p>Pascal Racine-Venne's demo</p>
    </div>
  )
}

export default Navbar
