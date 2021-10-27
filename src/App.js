import React from 'react'
import Navbar from './navbar.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import SubscriptionForm from './subscription_form.jsx'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Header />
        <SubscriptionForm />
      </div>
      <Footer />
    </div>
  )
}

export default App;
