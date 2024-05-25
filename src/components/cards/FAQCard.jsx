import React from 'react'

function FAQCard({ id, ques, sol }) {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between w-full lg:w-[50rem] 3xl:w-[60vw]'>
      <p className='text-6xl font-semibold md:w-[15%]'>{id}</p>
      <div className="flex flex-col gap-6 md:w-[85%] border-b border-b-[#877E7E] py-6">
        <p className="text-2xl font-semibold">{ques}</p>
        <p className="text-2xl text-[#877E7E] leading-relaxed sm:leading-loose">{sol}</p>
      </div>
    </div>  
  )
}

export default FAQCard
