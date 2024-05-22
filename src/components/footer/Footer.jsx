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
    <footer className="text-black w-[85%] mx-auto py-12 flex flex-col gap-12">

      <div className="mx-auto grid grid-cols-2 lg:grid-cols-3 place-items-cente gap-6 w-full">
        <div className="flex flex-col items-center ">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="">Home</Link></li>
            <li><Link to="/about" className="">About</Link></li>
            <li><Link to="/services" className="">Services</Link></li>
            <li><Link to="/portfolio" className="">Portfolio</Link></li>
          </ul>
        </div>
        <div className="flex flex-col items-center ">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Packages</h3>
          <ul className=" space-y-2">
            <li><Link to="/" className="">Packages</Link></li>
            <li><Link to="/" className="">Packages single</Link></li>
            <li><Link to="/contact" className="">Contact</Link></li>
          </ul>
        </div>
        <div className="flex flex-col items-center col-span-2 lg:col-span-1 gap-2">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Contact Us Now</h3>
          <form className="flex items-center space-x-2" onSubmit={submit}>
            <input type="email" placeholder="Enter your Email Address" className="bg-transparent border-b-2 focus:border-b-black text-black px-4 py-2 focus:outline-none border-gray-400" onChange={e => setEmail(e.target.value)} />
            <button className="btn bg-black text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors" onClick={submit}>Send</button>
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>

      <div className="mx-auto text-center flex flex-col gap-4">
        <Link to="/" className="flex items-center gap-0 md:gap-2">
          <div className="w-8 md:w-10">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div className="w-40 md:w-72">
            <img src={logo2} alt="Logo" className="w-full h-full object-cover" />
          </div>
        </Link>
        <p className="text-gray-400 text-sm sm:text-base">Copyright © Techentia 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
