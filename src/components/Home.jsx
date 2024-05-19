import React, { useState, useEffect } from "react";
import img1 from "./images/img1.jpeg";
import img2 from "./images/arrowimg.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons'



const HomePage = () => {
  return (
    <div className=" mt-14">
      <div className="lg:heading lg:text-center">
      <h1 className=" lg:text-left ml-4 lg:ml-32 text-3xl md:text-5xl lg:text-7xl font-bold">
    We’re a creative design
  </h1>
  <h1 className=" lg:text-left ml-4 lg:ml-32 text-3xl md:text-5xl lg:text-7xl font-bold">
    company based in New York.
  </h1>
  <p className="ml-4 lg:ml-20 mt-6 text-base md:text-lg lg:text-2xl text-gray-700">
    Crafting innovative digital experiences tailored to your needs. Our team brings your vision to life with precision and creativity.
  </p>
        <button className="bg-black text-white sm:ml-16 ml-8 py-6 px-7  lg:py-9 lg:px-12 text-center rounded-full font-bold cursor-pointer lg:mr-[1080px] mt-6  ">
          Get in touch <FontAwesomeIcon className='bg-black' icon={faArrowRight} />
        </button>
      </div>

      {/* images card */}
      <div className="ml-1 sm:ml-[20px] mt-[200px] flex space-x-5 sm:space-x-6 mx-auto my-16 ">
        <div className="col-span-2">
          <div className="">
            <img src={img1} alt="Image 1" className="w-[350px]" />
          </div>
        </div>
        <div className="col-span-2 text-right">
          <div className="" style={{ transform: "translateY(-4rem)" }}>
            <img src={img1} alt="Image 1" className="w-[350px]" />
          </div>
        </div>
        <div className="col-span-2">
          <div className="">
            <img src={img1} alt="Image 1" className="w-[350px]" />
          </div>
        </div>
        <div className="col-span-2">
          <div className="" style={{ transform: "translateY(-9rem)" }}>
            <img src={img1} alt="Image 1" className="w-[350px]" />
          </div>
        </div>
      </div>

     
     

      <div className="flex items-center justify-center space-x-4">
        <Link to='/contact' className="bg-black text-white  lg:ml-16 py-5 px-8  lg:py-8 lg:px-12 text-center rounded-full font-bold cursor-pointer mt-6  ">
          Get in touch 
        </Link>
        <Link to="/services" className="bg-transparent text-black lg:ml-16 py-4 px-4  lg:py-7 lg:px-9 text-center rounded-full font-bold cursor-pointer mt-6 border-2 border-black">
          Browse Services 
        </Link>
      </div>

      {/* get in touch black card */}
       
      <section className="flex flex-col items-center mt-8 bg-black text-white py-8 h-[400px] sm:h-[500px] ">
  <div className="bg-black text-center mt-14 ">
    <pre className="bg-black text-xl font-abc font-bold sm:text-2xl ">GET IN TOUCH TODAY</pre>
    <div className="mt-12 bg-black">
    <h1 className="bg-black  font-abc font-bold mt-4  sm:text-5xl text-3xl">Have an idea?</h1>
    <h1 className="bg-black  font-abc font-bold mt-2 sm:text-5xl text-3xl">Let's bring it to life.</h1>
  </div>
  </div>
  <Link to='/contact' className=" mt-7 sm:mt-12 bg-white text-black py-6 px-6 sm:py-6 sm:px-8 text-center rounded-full font-bold cursor-pointer border-2 border-black">
    Get in Touch <FontAwesomeIcon className='' icon={faArrowRight} />
  </Link>
</section>


      
    </div>
  );
};

export default HomePage;
