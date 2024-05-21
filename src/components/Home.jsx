import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { thumb1, thumb2, thumb3, thumb4 } from "../assets";

const HomePage = () => {
  return (
    <div className="mt-14">

      <div className="w-[85%] mx-auto flex flex-col gap-6 ">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold w-[80%]">We’re a creative design company based in New Delhi.</h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-700">Crafting innovative digital experiences tailored to your needs. Our team brings your vision to life with precision and creativity.</p>
        <Link to="/contact">
          <button className="bg-black text-white py-6 px-7  lg:py-9 lg:px-12 rounded-full font-bold cursor-pointer mt-6  ">
            Get in touch{" "}
            <FontAwesomeIcon className="bg-black" icon={faArrowRight} />
          </button>
        </Link>
      </div>

      <div className="px-4 mt-[200px] flex justify-between mx-auto w-[85%] my-16 ">
        <div className="w-[20%]">
          <img src={thumb1} alt="Image 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-[20%] -translate-y-24">
          <img src={thumb2} alt="Image 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-[20%]">
          <img src={thumb3} alt="Image 1" className="w-full h-full object-cover" />
        </div>
          <div className="w-[20%] -translate-y-36">
            <img src={thumb4} alt="Image 1" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <Link
          to="/contact"
          className="bg-black text-white  lg:ml-16 py-5 px-8  lg:py-8 lg:px-12 text-center rounded-full font-bold cursor-pointer mt-6  "
        >
          Get in touch
        </Link>
        <Link
          to="/services"
          className="bg-transparent text-black lg:ml-16 py-4 px-4  lg:py-7 lg:px-9 text-center rounded-full font-bold cursor-pointer mt-6 border-2 border-black"
        >
          Browse Services
        </Link>
      </div>

      {/* get in touch black card */}

      <section className="flex flex-col items-center mt-8 bg-black text-white py-8 h-[400px] sm:h-[500px] ">
        <div className="bg-black text-center mt-14 ">
          <pre className="bg-black text-xl font-abc font-bold sm:text-2xl ">
            GET IN TOUCH TODAY
          </pre>
          <div className="mt-12 bg-black">
            <h1 className="bg-black  font-abc font-bold mt-4  sm:text-5xl text-3xl">
              Have an idea?
            </h1>
            <h1 className="bg-black  font-abc font-bold mt-2 sm:text-5xl text-3xl">
              Let's bring it to life.
            </h1>
          </div>
        </div>
        <Link
          to="/contact"
          className=" mt-7 sm:mt-12 bg-white text-black py-6 px-6 sm:py-6 sm:px-8 text-center rounded-full font-bold cursor-pointer border-2 border-black"
        >
          Get in Touch <FontAwesomeIcon className="" icon={faArrowRight} />
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
