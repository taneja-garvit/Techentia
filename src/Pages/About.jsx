import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCompare, faCartShopping, faServer, faBook, faVideo,faArrowRight  } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { about } from '../assets';


function About() {
  return ( 
    <>
      <div className="mt-8">
        <div className='flex flex-col '>
          <h3 className='ml-8  font-bold text-xl'>_______ A B O U T &nbsp;U S </h3>
          <h1 className='ml-8 mt-6 text-3xl sm:text-6xl font-bold '>We are an extension of your creative team</h1>
        </div>
        <div className='flex justify-center items-center'>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipiscing sed morbi</p> */}
        </div>
      </div>
      <div className='mt-8'>
        <img src={about} style={{ width: '90%', margin: 'auto' }} alt="" />
      </div>
      <div className="flex items-center justify-center space-x-4">
        <Link to='/contact' className="bg-black text-white  lg:ml-16 py-4 px-8  lg:py-6 lg:px-10 text-center rounded-full font-bold cursor-pointer mt-6  ">
          Get in touch <FontAwesomeIcon className='bg-black' icon={faArrowRight} />
        </Link>
        <Link to='/services' className="bg-transparent text-black lg:ml-16 py-3 px-6  lg:py-5 lg:px-8 text-center rounded-full font-bold cursor-pointer mt-6 border-2 border-black">
          Browse Services <FontAwesomeIcon  icon={faArrowRight} />
        </Link>
      </div>
      <div className='mt-8'>
        <h1 className='flex ml-8 underline text-xl sm:text-3xl font-bold'>Discover Our Impact in your Industry</h1>
        <div className="flex flex-col md:flex-row text-2xl">
  <div className="w-full md:w-1/2">
    <ul className='mt-8 ml-0 md:ml-16'>
      <li className="p-4 rounded-lg">
        <span className="font-bold">• Education</span>
        <FontAwesomeIcon className='ml-3' icon={faBook} />
      </li>
      <li className="p-4 rounded-lg">
        <span className="font-bold">• Retail</span>
        <FontAwesomeIcon className='ml-3' icon={faCartShopping} />
      </li>
      <li className="p-4 rounded-lg">
        <span className="font-bold">• High Tech</span>
        <FontAwesomeIcon className='ml-3' icon={faCodeCompare} />
      </li>
    </ul>
  </div>
  <div className="w-full md:w-1/2">
    <ul className='mt-8 ml-0 md:ml-16'>
      <li className="p-4 rounded-lg">
        <span className="font-bold">• Social Media</span>
        <FontAwesomeIcon className='ml-3' icon={faInstagram} />
      </li>
      <li className="p-4 rounded-lg">
        <span className="font-bold">• Video Editing</span>
        <FontAwesomeIcon className='ml-3' icon={faVideo} />
      </li>
      <li className="p-4 rounded-lg">
        <span className="font-bold">• Public services</span>
        <FontAwesomeIcon className='ml-3' icon={faServer} />
      </li>
    </ul>
  </div>
</div>


      </div>
    </>
  )
}

export default About;
