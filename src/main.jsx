import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Hero/>
  </React.StrictMode>,
)


