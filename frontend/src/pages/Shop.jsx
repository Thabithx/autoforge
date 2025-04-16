import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import Vehicle from '../components/Vehicle';
import assets from '../assets/asets';

const Shop = () => {

  const shopContext = useContext(ShopContext);

  useEffect(()=>{
      shopContext.fetchProductData()
    },[])

  const {productdata,isloading} = shopContext;
  console.log((productdata));
  
  return (
    <div>
      <Title text1={"EXPLORE"} text2={"VEHICLES."}/>
         <div className="py-2 sm:py-4 md:py-6 lg:py-10  px-8 sm:px-16 md:px-32 lg:px-64 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {isloading ? (
               <p>Loading vehicles...</p>
            ) : (
               productdata.map((vehicle, index) => (
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
  )
}

export default Shop