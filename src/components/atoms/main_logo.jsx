import React from 'react';
import logo from '../../images/logo_maroon.svg';

const MainLogo = () => {
  const style = {
    paddingTop: '4px',
  }
  return (
    <a href="https://pascalracinevenne.herokuapp.com/"
      target="_blank"
      rel="noreferrer">
      <img src={logo} alt="Logo" style={style} />
    </a>
  )
}

export default MainLogo;
