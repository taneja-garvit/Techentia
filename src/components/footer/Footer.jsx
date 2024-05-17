import React from 'react';

function Footer() {
  return (
    <footer className="text-black py-12  ">
      <div className="container mx-auto flex flex-wrap justify-ceter mt-16 space-x-32">
        <section className="footer__section px-4 ml-28">
          <h3 className="text-3xl font-semibold mb-4">Pages</h3>
          <ul className="footer__navigation space-y-1">
            <li><a href="/" className="text-xl hover:text-gray-300">Home</a></li>
            <li><a href="/" className="text-xl hover:text-gray-300">About</a></li>
            <li><a href="/" className="text-xl hover:text-gray-300">Blog</a></li>
            <li><a href="./portfolio.html" className="text-xl hover:text-gray-300">Portfolio</a></li>
          </ul>
        </section>
        <section className="footer__section sm:px-4">
          <h3 className="text-lg font-semibold sm:mb-4">&nbsp;</h3>
          <ul className="footer__navigation space-y-1">
            <li><a href="/" className="text-xl hover:text-gray-300">Packages</a></li>
            <li><a href="/" className="text-xl hover:text-gray-300">Packages single</a></li>
            <li><a href="./contact.html" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </section>
        <section className="mt-8 footer__section sm:px-4 sm:mt-0">
          <h3 className="text-3xl font-semibold sm:mb-4 space-y-1">Utility Pages</h3>
          <ul className="footer__navigation">
            <li><a href="/" className="text-xl hover:text-gray-300">Start Here</a></li>
            <li><a href="/" className="text-xl hover:text-gray-300">Style Guide</a></li>
            <li><a href="/" className="text-xl hover:text-gray-300">404 Not Found</a></li>
            <li><a href="/" className="text-xl hover:text-gray-300">Password Protected</a></li>
            <li><a href="/" className="text-xl hover:text-gray-300"><span>Browse More Templates</span></a></li>
          </ul>
        </section>
        <section className="mt-8  footer__section sm:px-4 sm:mt-0 ">
          <h3 className="text-2xl sm:text-3xl font-semibold sm:mr-0 mb-4">Contact Us</h3>
          <form className="footer__form flex items-center space-x-1">
            <input type="email" placeholder="Enter your Email Address" className="bg-transparent border-2 border-black text-black px-4 py-2 rounded-xl focus:outline-none " />
            <button className="btn bg-black hover:transition-transform text-white px-4 py-2 rounded-xl">Subscribe</button>
          </form>
        </section>
      </div>

      <div className="container mx-auto text-center mt-12 mt-36">
        <div className='mt-36'>
          <img src="./assets/logo.svg" alt="Logo" className="mx-auto mb-6" />
        </div>
        <div>
          <p>Copyright © Agency X | Designed by BRIX Templates - Powered by Webflow</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
