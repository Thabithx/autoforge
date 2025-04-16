import React from 'react'
import assets from '../assets/asets'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='flex bg-[#fefdfb] font-semibold py-5 pb-10'>
      <Link to="/luxury"><div><img src={assets.rollsroyceghost} alt="" /><p className='text-center'> LUXURY</p></div></Link>
      <Link to="/performance"><div><img src={assets.porsche911} alt="" /><p className='text-center'>PERFORMANCE</p></div></Link>
      <Link to="/electric"><div><img  src={assets.teslaroadster} alt="" /><p className='text-center'>ELECTRIC</p></div></Link>
      <Link to="suv"><div><img src={assets.fordeverest} alt="" /><p className='text-center'>SUVs</p></div></Link>
      
    </div>
  )
}

export default Categories