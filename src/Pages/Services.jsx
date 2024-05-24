import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { video, product, app, webdesign, dis } from "../assets";

function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: product,
      heading: "Combo (Web & App)",
      desc: ["Cross platform", "Intuitive UI/UX", "Lifetime Support"],
      price: 250,
      discount: 20,
    },
    {
      id: 2,
      image: video,
      heading: "Video Editing",
      desc: ["SEO friendly site", "SSL certificate", "Lifetime Support"],
      price: 500,
      discount: 20,
    },
    {
      id: 3,
      image: webdesign,
      heading: "Web Development",
      desc: ["SEO friendly site", "SSL certificate", "Lifetime Support"],
      price: 600,
      discount: 20,
    },
    {
      id: 4,
      image: app,
      heading: "App Development",
      desc: ["Cross platform", "Intuitive UI/UX", "Lifetime Support"],
      price: 200,
      discount: 20,
    },
  ];
  const totalSlides = slides.length;

  const showSlide = (index) => {
    if (index < 0) {
      setCurrentSlide(totalSlides - 1);
    } else if (index >= totalSlides) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className='pt-[7rem] md:pt-[10rem] w-[85%] mx-auto'>

        <div className='flex flex-col gap-10'>
          <h3 className='font-bold text-xl'>_______ S E R V I C E S</h3>
          <h1 className='text-3xl sm:text-6xl font-bold '>We offer a wide range of design services</h1>
        <div className="slide-container flex flex-col items-center relative">
          <img
            className="w-[400px]"
            src={slides[currentSlide].image}
            alt={`Image ${slides[currentSlide].id}`}
          />
          <h2 className="text-3xl font-medium">{slides[currentSlide].heading}</h2>
          <ul className="text-lg font-semibold">
            {slides[currentSlide].desc.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="price flex flex-col items-center">
            <p className="text-lg">
              Original Price:{" "}
              <span style={{ textDecoration: "line-through" }}>
                {" "}
                ${slides[currentSlide].price}
              </span>
            </p>
            <p className="text-lg">
              Discounted Price: $
              {(
                slides[currentSlide].price -
                slides[currentSlide].price * (slides[currentSlide].discount / 100)
              ).toFixed(0)}
            </p>
          </div>
        </div>
        <div className="btns flex justify-center gap-20">
          <FontAwesomeIcon
            className=""
            size="4x"
            rotation={180}
            onClick={prevSlide}
            icon={faArrowRight}
          />
          <FontAwesomeIcon
            className=""
            size="4x"
            onClick={nextSlide}
            icon={faArrowRight}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
