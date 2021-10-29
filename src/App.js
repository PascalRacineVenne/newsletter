import React from 'react'
import Navbar from './components/navbar.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import SubscriptionForm from './components/subscription_form.jsx'

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
