import React from 'react'
// import { validEmail, isEmpty } from './regex.jsx'
import Navbar from './navbar.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import SubscriptionForm from './subscription_form.jsx'
// import Input from './input.jsx';
// import Button from './button.jsx';
// import Welcome from './welcome.jsx'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SubscriptionForm />
      <Footer />
    </div>
  )
}

export default App;
