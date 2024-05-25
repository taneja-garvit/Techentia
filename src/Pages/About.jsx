import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCompare, faCartShopping, faServer, faBook, faVideo, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { about } from '../assets';


function About() {
  return (
    <div className='pt-[7rem] md:pt-[10rem] pb-[5rem] w-[85%] mx-auto'>
      <div className='flex flex-col gap-10'>
        <h3 className='font-bold text-xl'>_______ A B O U T &nbsp;U S </h3>
        <h1 className='text-3xl sm:text-6xl font-bold '>We are an extension of your creative team</h1>
        <img src={about} alt="" />
        <h1 className='flex  underline text-xl sm:text-3xl font-bold'>Discover Our Impact in your Industry</h1>
        <div className="flex flex-col md:flex-row text-2xl">
          <div className="w-full md:w-1/2">
            <ul className='mt-8'>
              <li className="py-2 rounded-lg">
                <span className="font-bold">• Education</span>
                <FontAwesomeIcon className='ml-3' icon={faBook} />
              </li>
              <li className="py-2 rounded-lg">
                <span className="font-bold">• Retail</span>
                <FontAwesomeIcon className='ml-3' icon={faCartShopping} />
              </li>
              <li className="py-2 rounded-lg">
                <span className="font-bold">• High Tech</span>
                <FontAwesomeIcon className='ml-3' icon={faCodeCompare} />
              </li>
              <li className="py-2 rounded-lg">
                <span className="font-bold">• Social Media</span>
                <FontAwesomeIcon className='ml-3' icon={faInstagram} />
              </li>
              <li className="py-2 rounded-lg">
                <span className="font-bold">• Video Editing</span>
                <FontAwesomeIcon className='ml-3' icon={faVideo} />
              </li>
              <li className="py-2 rounded-lg">
                <span className="font-bold">• Public services</span>
                <FontAwesomeIcon className='ml-3' icon={faServer} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
