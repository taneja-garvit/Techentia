import React, { useState, useEffect } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleClickOutside = (event) => {
    // Check if clicked element is not the toggle button or its descendant
    if (!event.target.closest('.navbar-toggler') && isToggled) {
      setIsToggled(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isToggled]);

  return (
    
    <nav className="navbar flex items-center justify-between p-8 mx-auto z-50 relative">
      <div className="navbar-brand">
        <img src="./assets/logo.svg" alt="Logo" className="max-h-10 w-auto block" />
      </div>

      <div className=" mr-16 hidden lg:flex space-x-8 text-black font-semibold">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/services" className="nav-item">Services</Link>
        <Link to="/portfolio" className="nav-item">Portfolio</Link>
        <Link to="/contact" className="nav-item">Contact Us</Link>
      </div>

      <button
        className={`navbar-toggler lg:hidden text-black text-2xl ${isToggled ? 'fixed right-8 top-8' : ''}`}
        onClick={handleToggle}
      >
        ☰
      </button>

      <ul
        className={`navbar-collapse fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center space-y-8 transform ${
          isToggled ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 lg:hidden`}
      >
        <Link to="/" className="nav-item bg-black">Home</Link>
        <Link to="/about" className="nav-item bg-black">About</Link>
        <Link to="/services" className="nav-item bg-black">Services</Link>
        <Link to="/portfolio" className="nav-item bg-black">Portfolio</Link>
        <Link to="/contact" className="nav-item bg-black">Contact Us</Link>
        
      </ul>
    </nav>
  );
};

export default Navbar;
