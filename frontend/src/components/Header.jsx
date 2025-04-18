import { Link, NavLink } from 'react-router-dom'
import assets from '../assets/asets'
import { ShopContext } from '../context/ShopContext'
import { useContext, useEffect, useState, useRef } from 'react'
import Categories from './Categories'
import Vehicle from './Vehicle'

const Header = () => {
  const {
    showSearch,
    setShowSearch,
    search,
    setSearch,
    productdata,
    isloading,

  } = useContext(ShopContext)

  const [filteredProducts, setFilteredProducts] = useState([])
  const [showCategories, setShowCategories] = useState(false)
  const categoryRef = useRef(null)
  const searchRef = useRef(null)
  const searchDropdownRef = useRef(null)

  useEffect(() => {
    if (showSearch) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showSearch])

  useEffect(() => {
    if (!search.trim()) {
      setFilteredProducts([])
      return
    }

    if (Array.isArray(productdata)) {
      const filtered = productdata.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
      setFilteredProducts(filtered)
    }
  }, [search, productdata])

  useEffect(() => {
    const handleClickOutside = e => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(e.target)
      ) {
        setShowCategories(false)
      }

      if (
        searchRef.current &&
        !searchRef.current.contains(e.target) &&
        searchDropdownRef.current &&
        !searchDropdownRef.current.contains(e.target)
      ) {
        setShowSearch(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      {showSearch && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm z-10 transition-opacity duration-500 opacity-100"></div>
      )}

      <div
        className={`flex justify-between text-sm items-center h-13 bg-[#fefdfb] lg:px-40 relative z-20 ${
          showCategories ? 'sticky top-0 shadow-md ' : ''
        } ${showSearch? "pt-2":""}`}
      >
        <Link to="/">
          <img src={assets.logo} className="w-36" alt="" />
        </Link>

        <div className="flex w-1/2 justify-center">
          {showSearch ? (
            <div ref={searchRef} className="bg-[#fefdfb] flex w-full px-4 rounded-3xl py-2 items-center gap-2 justify-center">
              <img src={assets.search} className="w-6" />
              <input
                type="text"
                className="w-full bg-transparent text-base border-none focus:outline-none focus:ring-0 focus:border-transparent"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          ) : (
            <ul className="flex flex-row gap-8 text-black items-center">
              <NavLink to="/shop" className="flex flex-col items-center">
                <p>SHOP</p>
                <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
              </NavLink>

              <div ref={categoryRef} className="relative">
                <div className="cursor-pointer py-5" onClick={() => setShowCategories(!showCategories)}>
                  CATEGORIES
                </div>

                {showCategories && (
                  <div className="fixed top-14 left-0 w-screen  bg-[#fefdfb] z-30 shadow-lg rounded-b-2xl overflow-hidden animate-slideDown">
                    <div className="flex justify-center gap-8 w-full lg:px-40">
                      <div className="w-full cursor-pointer hover:text-black" onClick={() => setShowCategories(!showCategories)}>
                        <Categories />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/support" className="flex flex-col items-center">
                <p>SUPORT</p>
                <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
              </NavLink>
            </ul>
          )}
        </div>

        <div className="flex items-center justify-center gap-4">
          {showSearch ? (
            search !== '' ? (
              <div>
                <button onClick={() => setSearch('')} className="inline-block">
                  CLEAR
                </button>
                <div
                  ref={searchDropdownRef}
                  className={`fixed top-14 left-0 w-screen bg-[#fefdfb] z-30 overflow-hidden shadow-lg rounded-b-sm animate-slideDown`}
                >
                  <div className="w-full cursor-pointer hover:text-black">
                    <div className="max-h-[100vh] overflow-y-auto pb-10 px-40">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {isloading ? (
                          <p>Loading vehicles...</p>
                        ) : (
                          filteredProducts.map((vehicle, index) => (
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

                </div>
              </div>
            ) : (
              <div
                ref={searchDropdownRef}
                className="fixed top-14 left-0 w-screen bg-[#fefdfb] z-30 overflow-hidden shadow-lg rounded-b-sm animate-slideDown"
              >
                <div className="flex justify-center gap-8 w-full py-5 text-center pl-14">
                  <div className="text-gray-700 text-base justify-start items-center w-2/5">
                    <p className="mb-2 text-sm text-gray-500 text-start">Quick Links</p>
                    <ul className='text-start font-semibold'>
                      <li className="hover:underline cursor-pointer">BMW M5</li>
                      <li className="hover:underline cursor-pointer">Porsche 911</li>
                      <li className="hover:underline cursor-pointer">Tesla Roadster</li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          ) : (
            <img
              src={assets.search}
              className="w-6 cursor-pointer"
              alt=""
              onClick={() => {
                setShowSearch(true)
                setSearch('')
              }}
            />
          )}
          <Link to="/profile">
            <img src={assets.profile} alt="" className="w-6" />
          </Link>
          <Link to="/garage">
            <img src={assets.garage} alt="" className="w-[33px]" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
