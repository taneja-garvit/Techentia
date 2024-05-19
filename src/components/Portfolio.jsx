import React from 'react'
import video1 from './videos/video1.mp4'

function Portfolio({ src,title ,desc}) {
    return (
        <div className='min-h-screen justify-evenly py-10 flex flex-col gap-10 text-center  mx-auto'>

        <h1 className='text-4xl 3xl:text-6xl text-white w-[75%]  mx-auto'>Portfolio</h1>

        <p className='text-sm 3xl:text-xl w-[75%] mx-auto'>Know Flown Developer from our valuable customers’ past web designing and development experience. Our work ethic makes us one of India’s best web design companies. Flown Developer forms a major part of the list of the top design services.</p>
       
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center'>
          {/* <PortfolioCard src={video1} title='Brainwave' desc="AI powered website" /> */}
          {/* <PortfolioCard src="video2.mp4" title='Brainwave' desc="AI powered website" />
          <PortfolioCard src="video3.mp4" title='Brainwave' desc="AI powered website" />
          <PortfolioCard src="video4.mp4" title='Brainwave' desc="AI powered website" />
          <PortfolioCard src="video5.mp4" title='Brainwave' desc="AI powered website" />
          <PortfolioCard src="video3.mp4" title='Brainwave' desc="AI powered website" />
          <PortfolioCard src="video1.mp4" title='Brainwave' desc="AI powered website" />
          <PortfolioCard src="video2.mp4" title='Brainwave' desc="AI powered website" /> */}
        </div>

      </div>
    )
}

export default Portfolio