import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import { ImOffice } from 'react-icons/im'
import Portfolio from './components/Portfolio'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Services'
import ContactUs from './components/ContactUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/services" element={<Services/>} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<ContactUs/>} />
   
     </Routes>
     <Footer/>
      </Router>
    </>
  )
}

export default App
