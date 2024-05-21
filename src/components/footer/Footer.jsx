import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { logo, logo2 } from '../../assets';

function Footer({ path = "/" }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const submit = () => {
    // Basic email validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      setTimeout(() => setError(null), 2000);
      return;
    }

    axios.get(`https://script.google.com/macros/s/AKfycbzgFHCKgZf8T4M6m6pFeOkp-Ai-Ys_8H8Sa7nXeTEFn8MPo9rhpFeYRnMORVfRXurGSsQ/exec?email=${email}`)
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
    <footer className="text-black py-8 sm:py-12">
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
        <section className="footer__section px-4 sm:px-0">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Contact Us Now</h3>
          <form className="footer__form flex items-center space-x-2" onSubmit={(e) => { e.preventDefault(); submit(); }}>
            <input type="email" placeholder="Enter your Email Address" className="bg-transparent border-2 focus:border-black text-black px-4 py-2 rounded-md focus:outline-none border-gray-400" onChange={e => setEmail(e.target.value)} />
            <button className="btn bg-black text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors" onClick={submit}>Send</button>
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </section>
      </div>

      <div className="container mx-auto text-center mt-8 flex flex-col gap-4">
        <div className="flex items-center justify-center gap-2">
          <div className="w-10">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div className="w-72">
            <img src={logo2} alt="Logo" className="w-full h-full object-cover" />
          </div>
          {/* <div className="">
          <p className='text-5xl font-bold tracking-widest'>ECHENTIA</p>
        </div> */}
        </div>
        <p className="text-gray-400 text-sm sm:text-base">Copyright © Techentia 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
