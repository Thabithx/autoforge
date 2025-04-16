import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Vehicle = ({id,image,name,price,shortdescription,model}) => {
  
   const { setSearch } = useContext(ShopContext);
   return (
      <Link onClick={()=>setSearch("")} to={`/vehicle/${id}`} className="block">
      <div>
         <img src={image} alt="" className='w-full' />
         <div className="flex flex-col items-center pb-16 pt-4">
            <div>
               <p className="font-bold mt-2 text-center">{name}</p>
               <p className="text-gray-700 text-center mt-1">${price}</p>
            </div>
            <div className='w-full'>
               <p>{shortdescription}</p>
               <div className='w-full'>
                  <button className='rounded-sm w-full py-2 text-sm bg-[#252526] text-white mt-2'>Build your {model}</button>
                  <button className='w-full rounded-sm py-2 text-sm bg-white border-2 border-[#252526] text-bg-[#252526] mt-2'>Add to Garage</button>
               </div>
            </div>
         </div>
      </div>
      
    </Link>
  )
}

export default Vehicle