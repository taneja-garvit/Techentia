import React, { useState, useEffect } from "react";
import img1 from "./images/img1.jpeg";
import img2 from "./images/arrowimg.png";
import { Link } from 'react-router-dom';



const HomePage = () => {
  return (
    <div className=" mt-14">
      <div className="lg:heading lg:text-center">
        <h1 className="ml-16 lg:ml-32 lg:text-left text-4xl md:text-7xl lg:text-7xl lg:font-bold ">
          We’re a creative design 
        </h1>
        <h1 className="ml-16 lg:ml-32 lg:text-left text-4xl md:text-7xl lg:text-7xl lg:font-bold ">
          company based in New York.
        </h1>
        <p className="ml-16 lg:ml-32 lg:text-left mt-10 text-lg md:text-xl lg:text-2xl text-gray-700">
        Crafting innovative digital experiences tailored to your needs. Our team brings your vision to life with precision and creativity
        </p>
        <button className="bg-black text-white ml-16 py-4 px-8  lg:py-8 lg:px-12 text-center rounded-full font-bold cursor-pointer lg:mr-[1080px] mt-6  ">
          Get in touch <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>

      {/* images card */}
      <div className=" ml-[20px] mt-[200px] flex space-x-6 mx-auto my-16 ">
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

      {/* //carousel */}
     

      <div className="flex items-center justify-center space-x-4">
        <Link to='/contact' className="bg-black text-white  lg:ml-16 py-4 px-8  lg:py-8 lg:px-12 text-center rounded-full font-bold cursor-pointer mt-6  ">
          Get in touch <i className="fas fa-arrow-right "></i>
        </Link>
        <Link to="/services" className="bg-transparent text-black lg:ml-16 py-3 px-6  lg:py-8 lg:px-12 text-center rounded-full font-bold cursor-pointer mt-6 border-2 border-black">
          Browse Services <i className="fas fa-arrow-right"></i>
        </Link>
      </div>

      {/* get in touch black card */}
       
      <section className="flex justify-center mt-8 bg-black text-white h-[350px] sm:h-[500px] w-fit">
      <div className=" sm:mt-8 bg-black">
        <pre className="bg-black text-xl mr-20 font-abc font-bold mt-12 sm:text-2xl ml-[115px] ">GET IN TOUCH TODAY</pre>
        <h1 className="bg-black text-3xl ml-28 font-abc font-bold mt-10  sm:text-5xl sm:ml-20">Have an idea?</h1>
        <h1 className="bg-black text-3xl ml-20 font-abc font-bold mt-2  sm:text-5xl sm:ml-[28px] ">Let's bring it to life.</h1>
        <button className=" ml-[130px] sm:ml-[160px] bg-white text-black py-6 px-10 text-center rounded-full font-bold cursor-pointer mt-6 border-2 border-black">
          Get in Touch <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>

      
    </div>
  );
};

export default HomePage;
