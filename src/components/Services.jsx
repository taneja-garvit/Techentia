import React, { useState, useEffect } from 'react';
import img1 from './images/arrowimg.png';
import img2 from './images/arrowimg1.png';
import img3 from './images/arrowimg2.png';
import img4 from './images/arrowimg4.png';

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { id: 1, image: img1, heading: "Combo (Web & App)", desc: ["Cross platform", "Intuitive UI/UX", "Lifetime Support"], price: 250, discount: 20 },
        { id: 2, image: img2, heading: "Video Editing", desc: ["SEO friendly site", "SSL certificate", "Lifetime Support"], price: 500, discount: 20 },
        { id: 3, image: img3, heading: "Web Development", desc: ["SEO friendly site", "SSL certificate", "Lifetime Support"], price: 700, discount: 30 },
        { id: 4, image: img4, heading: "App Development", desc: ["Cross platform", "Intuitive UI/UX", "Lifetime Support"], price: 200, discount: 20 }
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
        <div className="head flex flex-col items-center gap-4 mt-8">
            <h3 className='font-bold text-2xl sm:text-5xl'>_______ S E R V I C E S</h3>
            <h1 className='text-3xl ml-5'>We offer a wide range of design services</h1>
           
            <div className="slide-container">
                <div className="flex flex-col items-center">
                    <img className='w-[400px] mb-4' src={slides[currentSlide].image} alt={`Image ${slides[currentSlide].id}`} />
                    <h2 className='text-4xl mb-2'>{slides[currentSlide].heading}</h2>
                    <p className='text-2xl mb-1'></p>
                    <ul className="text-lg mb-1 font-semibold flex flex-col justify-start ">
                        {slides[currentSlide].desc.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className="price">
                        <p className="text-lg mb-1">Original Price: ${slides[currentSlide].price}</p>
                        <p className="text-lg mb-1">Discounted Price: ${(slides[currentSlide].price - (slides[currentSlide].price * (slides[currentSlide].discount / 100))).toFixed(0)}</p>
                    </div>
                </div>
            </div>
            <div className="btns flex justify-center gap-4  p-4 rounded-lg space-x-4 ">
    <button className="btn prev-btn bg-black text-white px-4 py-2 rounded-md" onClick={prevSlide}>Previous</button>
    <button className="btn next-btn bg-black text-white px-9 py-2 rounded-md" onClick={nextSlide}>Next</button>
</div>

        </div>
    );
}

export default Slider;
