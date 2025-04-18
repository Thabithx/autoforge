import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-32 py-10 bg-[#252526] text-white'>
      <div className='flex justify-start w-3/4 gap-20'>
        <div className="text-white text-base w-full">
          <p className="mb-2 text-base text-white font-semibold text-start">Quick Links</p>
          <ul className='text-start text-sm  text-white'>
            <Link to="/shop"><li className="hover:underline cursor-pointer">Shop</li></Link>
            <Link to="/performance"><li className="hover:underline cursor-pointer">Performance</li></Link>
            <Link to="/electric"><li className="hover:underline cursor-pointer">Electric</li></Link>
            <Link to="/luxury"><li className="hover:underline cursor-pointer">Luxury</li></Link>
            <Link to="/suv"><li className="hover:underline cursor-pointer">Suv</li></Link>
          </ul>
        </div>
        <div className='w-full'>
          <p className='mb-2 text-base text-white font-semibold text-start'>Newsletter</p>
          <p className='text-sm'>Latest news directly in your inbox</p>
          <input type="text" className=' py-1 px-3 w-full my-2 border-none focus:outline-none focus:ring-0 focus:border-transparent text-black' placeholder='Email'/><br />
          <button className='w-full border-none text-black px-4 py-2 bg-white '>Subscrible</button>
        </div>
        <div className='w-full'>
          <p className='mb-2 text-base text-white font-semibold text-start'>Locations & Contacts</p>
          <p className='text-sm'>Do you have any questions?</p>
          <button className='w-full border-none text-black px-4 py-2 my-2 bg-white'>Get in touch</button>
        </div>
      </div>

      <div>
        <hr className='my-10'/>
        <p >* If the values are given as ranges, these do not relate to a single, individual vehicle and do not constitute part of the offer. They are intended solely as a means of comparing different vehicle models and refer to the product portfolio that is available on the German market. Extra features and accessories (attachments, tyre formats etc.) can change relevant vehicle parameters such as weight, rolling resistance and aerodynamics and, in addition to weather and traffic conditions, as well as individual handling, can affect the fuel consumption, energy consumption, CO₂ emissions, range and performance values of a car.</p>
        <p className='py-5 text-center'>AUTOFORGE © 2025</p>
      </div>
    </div>
  )
}

export default Footer