import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Categories from '../components/Categories'
import Title from '../components/Title'
import assets from '../assets/asets'
import Vehicle from '../components/Vehicle'
import { Link } from 'react-router-dom'

const Home = () => {
  const shopContext= useContext(ShopContext)

  useEffect(()=>{
    shopContext.fetchProductData()
  },[])

  const {productdata,isloading} = shopContext;

  console.log(productdata);
  

  return (
    <div>
      <div className="relative w-full h-[100vh] ">
        <img
          src={assets.cars}
          alt="Dream Car"
          className="w-full h-full object-cover  "
        />
        <div className="absolute top-24 w-full text-center px-4">
          <h1 className="text-[#1d1d1f] text-2xl pb-1 sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Design it. Drive it. Own it.
          </h1>
          <h1 className="text-[#6e6e73] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
             Your dream car starts here.
          </h1>
          <Link to="/shop"><button className='py-2 px-7 text-base rounded-full bg-[#252526] text-white mt-8'>Explore</button></Link>
        </div>
      </div>

      <div className='px-8 sm:px-8 md:px-16 lg:px-32 '>
        <Title text1={"VEHICLE"} text2={"CATEGORIES."}/>
        <Categories/>
        <Title text1={"EXPLORE"} text2={"VEHICLES."}/>
         <div className="py-2 sm:py-4 md:py-6 lg:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {isloading ? (
               <p>Loading vehicles...</p>
            ) : (
               productdata.slice(4,8).map((vehicle, index) => (
               <Vehicle 
               key={index}
               id={vehicle._id}
               image={assets[vehicle.image]}
               price={vehicle.price}
               name={vehicle.name}
               model={vehicle.model}
               description={vehicle.description}
               /> 
               ))
            )}
         </div>
      </div>
    </div>
  )
}

export default Home