import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Configure from './pages/Configure'
import User from './pages/User'
import Garage from './pages/Garage'
import Support from './pages/Support'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/user' element={<User />} />
        <Route path='/configure' element={<Configure />} />
        <Route path='/garage' element={<Garage />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </div>
  )
}

export default App
