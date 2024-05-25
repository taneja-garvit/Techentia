import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { thumb1, thumb2, thumb3, thumb4 } from "../assets";

const Home = () => {
  return (
    <div className="pt-[7rem] md:pt-[10rem] pb-[5rem] flex flex-col gap-12">

      <div className="w-[85%] mx-auto flex flex-col gap-6 ">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold md:w-[85%] eading-[10rem] tracking-wide">We’re a creative design company based in New Delhi.</h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-700">Crafting innovative digital experiences tailored to your needs. Our team brings your vision to life with precision and creativity.</p>
        <Link to="/contact" className="btn btn1">Get in touch<FontAwesomeIcon className="bg-transparent" icon={faArrowRight} /></Link>
      </div>

      <div className="flex justify-between pt-[8rem] h-[20rem] xs:h-[23rem] sm:h-[30rem] lg:h-[35rem] xl:h-[42.5rem] 3xl:h-[55rem] 5xl:h-[65rem] mx-auto w-[85%] ">
        <div className="w-[22%] xs:w-[20%] lg:w-[20] 3xl:w-[18%]">
          <img src={thumb1} alt="Image 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-[22%] xs:w-[20%] lg:w-[20] 3xl:w-[18%] -translate-y-24">
          <img src={thumb2} alt="Image 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-[22%] xs:w-[20%] lg:w-[20] 3xl:w-[18%]">
          <img src={thumb3} alt="Image 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-[22%] xs:w-[20%] lg:w-[20] 3xl:w-[18%] -translate-y-36">
          <img src={thumb4} alt="Image 1" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-3 items-center justify-center">
      <Link to="/contact" className="btn btn1 w-[14rem]">Get in touch<FontAwesomeIcon className="bg-transparent" icon={faArrowRight} /></Link>
      <Link to="/contact" className="btn btn2 w-[14rem]">Browse Services<FontAwesomeIcon className="bg-transparent" icon={faArrowRight} /></Link>
      </div>

      <div className="flex flex-col items-center bg-black text-white py-8 h-[400px] sm:h-[500px] ">
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
      </div>
    </div>
  );
};

export default Home;
