import React from 'react'
import img3 from './images/Aboutimg.jpeg'
import { Link } from 'react-router-dom';

function About() {
  return ( 
    <>
     <div className="mt-8">
      <div className='flex flex-col '>
        <h3 className='ml-8  font-bold text-xl'>_______ A B O U T &nbsp;U S </h3>
        <h1 className='ml-8 mt-6 text-6xl font-bold w-[650px]'>We are an extension of your creative team</h1>
      </div>
      {/* <div className='flex justify-center items-center'>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing sed morbi</p>
      </div> */}
    </div>
     <div className='mt-8'>
    <img src={img3} style={{ width: '90%', margin: 'auto' }} alt="" />
    </div>
    <div className="flex items-center justify-center space-x-4">
        <Link to='/contact' className="bg-black text-white  lg:ml-16 py-4 px-8  lg:py-6 lg:px-10 text-center rounded-full font-bold cursor-pointer mt-6  ">
          Get in touch <i className="fas fa-arrow-right "></i>
        </Link>
        <Link to='/services' className="bg-transparent text-black lg:ml-16 py-3 px-6  lg:py-5 lg:px-8 text-center rounded-full font-bold cursor-pointer mt-6 border-2 border-black">
          Browse Services <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
</>
  )
}

export default About