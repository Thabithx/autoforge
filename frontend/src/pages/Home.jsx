import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Categories from '../components/Categories'
import Title from '../components/Title'

const Home = () => {
  const shopContext= useContext(ShopContext)

  useEffect(()=>{
    shopContext.fetchProductData()
  },[])

  const {productdata} = shopContext;

  console.log(productdata);
  

  return (
    <div>
      <div>
        <img src="https://images.pexels.com/photos/63294/autos-technology-vw-multi-storey-car-park-63294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>
      <Title text1={"Our"} text2={"Categories"}/>
      <Categories/>
    </div>
  )
}

export default Home