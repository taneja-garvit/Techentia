import React from 'react'
import PortfolioCard from '../components/cards/Portfoliocard'

function Portfolio({portfolioRef}) {
  return (
    <div ref={portfolioRef} className="pt-[4.5rem] md:pt-[7rem] w-[85%] mx-auto">
      <div className='flex flex-col gap-10'>
        <h3 className='font-bold text-xl'>_______ P O R T F O L I O</h3>
        <h1 className='text-3xl sm:text-6xl font-bold'>Here are are some of our samples provided</h1>
        <div className='gap-x-8 gap-y-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center'>
          <PortfolioCard src={'https://res.cloudinary.com/dser8edfz/video/upload/v1728362435/aurora_p7gfhu.mp4'} title='Send Me Hugs' desc="Fundraiser" />
          <PortfolioCard src="nimbi.mp4" title='Nimbi' desc="Crypto project" />
          <PortfolioCard src={'https://res.cloudinary.com/dser8edfz/video/upload/v1732801557/evhsbgkusbw5mh1gbbxu.mp4'} title='Nika' desc="Portfolio website" />
          <PortfolioCard src="video4.mp4" title='AI_Bank' desc="Payment Invoicing Service" />
          <PortfolioCard src="brainwave.mp4" title='Brainwave' desc="AI powered website" />
          <PortfolioCard src={'https://res.cloudinary.com/dser8edfz/video/upload/v1732801226/hknlccoaofu7jeb5myfz.mp4'} title='Unibit' desc="Blockchain based Game" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
