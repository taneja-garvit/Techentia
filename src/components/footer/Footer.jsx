import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Footer({ path = "/"}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const submit = () => {
    // Basic email validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      setTimeout(() => setError(null), 2000); 
      return;
    }

    axios.get('(https://script.google.com/macros/s/AKfycbzgFHCKgZf8T4M6m6pFeOkp-Ai-Ys_8H8Sa7nXeTEFn8MPo9rhpFeYRnMORVfRXurGSsQ/exec?email=${email}')
      .then(res => {
        console.log(res);
        alert("Email sent successfully!");
        console.log("sent");
      })
      .catch(err => {
        console.error(err);
        setError("An error occurred. Try again later.");
        setTimeout(() => setError(null), 2000); 
        return;
      });
  };
  return (
    <footer className="mt-24  text-black py-8 sm:py-12">
        <div className="mb-8 bg-white  w-full h-[.5px]"></div>
      <div className="container mx-auto flex flex-wrap justify-center sm:justify-around">
        <section className="footer__section px-4 sm:px-0 mb-8 sm:mb-0">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Pages</h3>
          <ul className="footer__navigation space-y-2">
            <li><a href="/" className="text-lg hover:text-gray-400">Home</a></li>
            <li><Link to="/about" className="text-lg hover:text-gray-400">About</Link></li>
            <li><Link to="/services" className="text-lg hover:text-gray-400">Services</Link></li>
            <li><Link to="/portfolio" className="text-lg hover:text-gray-400">Portfolio</Link></li>
          </ul>
        </section>
        <section className="footer__section px-4 sm:px-0 mb-8 sm:mb-0">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Packages</h3>
          <ul className="footer__navigation space-y-2">
            <li><a href="/" className="text-lg hover:text-gray-400">Packages</a></li>
            <li><a href="/" className="text-lg hover:text-gray-400">Packages single</a></li>
            <li><a href="/" className="text-lg hover:text-gray-400">Contact</a></li>
          </ul>
        </section>
        <section className="footer__section px-4 sm:px-0 mb-8 sm:mb-0">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Utility Pages</h3>
          <ul className="footer__navigation space-y-2">
            <li><a href="/" className="text-lg hover:text-gray-400">Start Here</a></li>
            <li><a href="/" className="text-lg hover:text-gray-400">Style Guide</a></li>
            <li><a href="/" className="text-lg hover:text-gray-400">404 Not Found</a></li>
            <li><a href="/" className="text-lg hover:text-gray-400">Password Protected</a></li>
            <li><a href="/" className="text-lg hover:text-gray-400">Browse More Templates</a></li>
          </ul>
        </section>
        <section className="footer__section px-4 sm:px-0">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Contact Us Now</h3>
          <form className="footer__form flex items-center space-x-2"  onSubmit={(e) => { e.preventDefault(); submit(); }}>
            <input type="email" placeholder="Enter your Email Address" className="bg-transparent border-2 border-black text-black px-4 py-2 rounded-md focus:outline-none focus:border-gray-400"  onChange={e => setEmail(e.target.value)} />
            <button className="btn bg-black text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors"   onClick={submit}>Send</button>
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </section>
      </div>

      <div className="container mx-auto text-center mt-8">
        <img src="./assets/logo.svg" alt="Logo" className="mx-auto mb-4 h-10 sm:h-12" />
        <p className="text-gray-400 text-sm sm:text-base">Copyright © Agency X | Designed by BRIX Templates - Powered by Webflow</p>
      </div>
    </footer>
  );
}

export default Footer;
