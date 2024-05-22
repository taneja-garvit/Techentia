import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImOffice } from 'react-icons/im'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, ContactUs, Home, Portfolio, Services } from './Pages'
import { Footer, Navbar } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
