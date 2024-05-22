import React from 'react'
import PortfolioCard from '../components/Portfoliocard'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Portfolio({ src,title ,desc}) {
    return (
        <div className='min-h-screen justify-evenly py-10 flex flex-col gap-10 mx-auto'>

        <div className="w-[85%] mx-auto flex flex-col gap-6 ">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold w-[80%]">Portfolio</h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-700">Know Flown Developer from our valuable customers’ past web designing and development experience. Our work ethic makes us one of India’s best web design companies. Flown Developer forms a major part of the list of the top design services.</p>
        <Link to="/contact">
          <button className="bg-black text-white py-6 px-7  lg:py-9 lg:px-12 rounded-full font-bold cursor-pointer mt-6  ">
            Get in touch{" "}
            <FontAwesomeIcon className="bg-black" icon={faArrowRight} />
          </button>
        </Link>
      </div>
       
        <div className='w-[85%] gap-x gap-y-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center'>
          <PortfolioCard src="Taskmate.mp4" title='Taskmate' desc="Crypto" />
          <PortfolioCard src="video2.mp4" title='Paper Portfolio' desc="AI powered website" />
          <PortfolioCard src="video3.mp4" title='DoSomeCoding' desc="AI powered website" />
          <PortfolioCard src="video4.mp4" title='AI_Bank' desc="AI powered website" />
          <PortfolioCard src="video5.mp4" title='Brainwave' desc="AI powered website" />
          <PortfolioCard src="video3.mp4" title='Brainwave' desc="AI powered website" />
          <PortfolioCard src="video1.mp4" title='Nimbi' desc="Crypto" />
          <PortfolioCard src="skillwallah.mp4" title='Skill Wallah' desc="AI powered website" />
        </div>

      </div>
    )
}

export default Portfolio