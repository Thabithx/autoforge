import { Link, NavLink } from 'react-router-dom'
import assets from '../assets/asets'
import { ShopContext } from '../context/ShopContext'
import { useContext, useEffect, useState } from 'react'

const Header = () => {

   const { showSearch, setShowSearch, search, setSearch,productdata } = useContext(ShopContext)

   const [filteredProducts, setFilteredProducts] = useState([]);

   useEffect(() => {
      if (!search.trim()) {
        setFilteredProducts([]);
        return;
      }
    
      if (Array.isArray(productdata)) {
        const filtered = productdata.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredProducts(filtered);
      }
    }, [search, productdata]);
    
   console.log(filteredProducts)
   

  return (
    <div className='flex justify-between items-center bg-transparent hover:bg-slate-300'>
      <Link to="/"><img src={assets.logo} className='w-44' alt="" /></Link>

      <div className='flex w-1/3 justify-center'>
        {showSearch ? (
          <div className='flex w-full bg-slate-100 px-4 rounded-3xl py-2 items-center gap-2 justify-center'>
            <img src={assets.search} className='w-6' />
            <input
              type="text"
              className='w-full bg-transparent text-base border-none focus:outline-none focus:ring-0 focus:border-transparent'
              placeholder='Search'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        ) : (
          <li className="flex flex-row gap-8 text-black items-center">
            <NavLink to="/shop" className="flex flex-col items-center">
              <p>Shop</p>
              <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>

            <div className="relative group">
               <div className="cursor-pointer py-5">Categories</div>

               <div className="fixed top-16 left-0 w-screen bg-slate-300 z-10
                                 max-h-0 overflow-hidden transition-all duration-500 ease-in-out
                                 group-hover:max-h-40 delay-200">
                  <div className="flex justify-center gap-8 w-full py-5">
                     <p className="cursor-pointer hover:text-black opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">SUVs</p>
                     <p className="cursor-pointer hover:text-black opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">Sports</p>
                     <p className="cursor-pointer hover:text-black opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">Luxury</p>
                  </div>
               </div>
            </div>





            <NavLink to="/support" className="flex flex-col items-center">
              <p>Suport</p>
              <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
          </li>
        )}
      </div>

      <div className='flex items-center justify-center gap-4'>
        {showSearch ? (
          search !== "" ? (
            <button onClick={() => setSearch("")} className="inline-block">CLEAR</button>
          ) : (
            <button onClick={() => { setShowSearch(false); setSearch(""); }}>CANCEL</button>
          )
        ) : (
          <img src={assets.search} className='w-8' alt="" onClick={() => setShowSearch(true)} />
        )}
        <Link to="/profile"><img src={assets.profile} alt="" className='w-8' /></Link>
        <Link to="/garage"><img src={assets.garage} alt="" className='w-14' /></Link>
      </div>
    </div>
  )
}

export default Header
