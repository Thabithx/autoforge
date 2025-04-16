import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Configure from './pages/Configure'
import User from './pages/User'
import Garage from './pages/Garage'
import Support from './pages/Support'
import Footer from './components/Footer'
import Luxury from './pages/Luxury'
import Performance from './pages/Performance'
import Suv from './pages/Suv'
import Electric from './pages/Electric'
import SingleVehicle from './pages/SingleVehicle'

const App = () => {
  return (
    <div className='bg-[#fefdfb]'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/user' element={<User />} />
        <Route path='/configure' element={<Configure />} />
        <Route path='/garage' element={<Garage />} />
        <Route path='/support' element={<Support />} />
        <Route path='/luxury' element={<Luxury />}></Route>
        <Route path='/performance' element={<Performance/>}></Route>
        <Route path='/suv' element={<Suv/>}></Route>
        <Route path='/electric' element={<Electric/>}></Route>
        <Route path="/vehicle/:id" element={<SingleVehicle />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
