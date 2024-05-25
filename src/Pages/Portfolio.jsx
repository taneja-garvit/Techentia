import React from 'react'
import PortfolioCard from '../components/cards/Portfoliocard'

function Portfolio({ src, title, desc }) {
  return (
    <div className="pt-[7rem] md:pt-[10rem] pb-[5rem] w-[85%] mx-auto">
      <div className='flex flex-col gap-10'>
        <h3 className='font-bold text-xl'>_______ P O R T F O L I O</h3>
        <h1 className='text-3xl sm:text-6xl font-bold'>Here are are some of our samples provided</h1>
        <div className='gap-x-8 gap-y-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center'>
          <PortfolioCard src="taskmate.mp4" title='Taskmate' desc="Task management application" />
          <PortfolioCard src="nimbi.mp4" title='Nimbi' desc="Animated Crypto project" />
          <PortfolioCard src="paper_portfolio.mp4" title='Paper Portfolio' desc="Animated Portfolio website" />
          <PortfolioCard src="video4.mp4" title='AI_Bank' desc="Payment Invoicing Service" />
          <PortfolioCard src="brainwave.mp4" title='Brainwave' desc="AI powered website" />
          <PortfolioCard src="skillwallah.mp4" title='Skill Wallah' desc="Learning Management System" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio