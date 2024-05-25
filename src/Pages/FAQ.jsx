import React from 'react'
import { FAQCard } from '../components'

function FAQ() {
  return (
    <div className="pt-[7rem] md:pt-[10rem] pb-[5rem] w-[85%] mx-auto">
      <div className='flex flex-col gap-10'>
        <h3 className='font-bold text-xl'>_______ F A Q S</h3>
        <h1 className='text-3xl sm:text-6xl font-bold'>Frequently Asked Questions</h1>
        <div className='flex flex-col gap-16 sm:gap-8 w-full justify-end items-end'>
          <FAQCard id="01" ques="Are you open for new projects?" sol="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint occaecat cupidatat non proident, sunt in culpa qui amet officia mollit anim id est laborum." />
          <FAQCard id="02" ques="How long has the agency been running for?" sol="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint occaecat cupidatat non proident, sunt in culpa qui amet officia mollit anim id est laborum." />
          <FAQCard id="03" ques="Do you currently have careers openings?" sol="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint occaecat cupidatat non proident, sunt in culpa qui amet officia mollit anim id est laborum." />
          <FAQCard id="04" ques="Do you offer discounts for nonprofit companies?" sol="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint occaecat cupidatat non proident, sunt in culpa qui amet officia mollit anim id est laborum." />
        </div>
      </div>
    </div>
  )
}

export default FAQ
