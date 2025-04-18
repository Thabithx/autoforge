import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import Vehicle from '../components/Vehicle';
import assets from '../assets/asets';

const Shop = () => {
  const { productdata, isLoading, fetchProductData } = useContext(ShopContext);

  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    brand: '',
    transmission: '',
    category: '',
    minPrice: 0,
    maxPrice: 5000000,
    year: 'All',
  });

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    let filtered = [...productdata];

    // Brand filter
    if (filters.brand) {
      filtered = filtered.filter((product) => product.brand === filters.brand);
    }

    // Transmission filter (using fuelType)
    if (filters.transmission) {
      filtered = filtered.filter((product) => product.fuelType === filters.transmission);
    }

    // Category filter
    if (filters.category) {
      filtered = filtered.filter((product) => product.category === filters.category);
    }

    // Price filter
    filtered = filtered.filter(
      (product) => product.price >= filters.minPrice && product.price <= filters.maxPrice
    );

    // Year filter
    if (filters.year !== 'All') {
      if (filters.year === '2020AndBelow') {
        filtered = filtered.filter((product) => product.year <= 2020);
      } else {
        filtered = filtered.filter((product) => product.year === parseInt(filters.year));
      }
    }

    setFilteredData(filtered);
  }, [filters, productdata]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="flex min-h-[80vh] px-10">
      <div className="w-1/4 p-4">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>

          {/* Brand Filter */}
          <div>
            <label className="block mb-2">Brand</label>
            <select
              name="brand"
              value={filters.brand}
              onChange={handleFilterChange}
              className="w-full border px-2 py-1"
            >
              <option value="">All Brands</option>
              <option value="Porsche">Porsche</option>
              <option value="Cadillac">Cadillac</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Ford">Ford</option>
              <option value="BMW">BMW</option>
              <option value="Tesla">Tesla</option>
              <option value="Bugatti">Bugatti</option>
              <option value="Rolls-Royce">Rolls-Royce</option>
            </select>
          </div>

          {/* Transmission Filter */}
          <div className="mt-4">
            <label className="block mb-2">Transmission</label>
            <select
              name="transmission"
              value={filters.transmission}
              onChange={handleFilterChange}
              className="w-full border px-2 py-1"
            >
              <option value="">All Transmissions</option>
              <option value="Gasoline">Gasoline</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
            </select>
          </div>

          {/* Category Filter */}
          <div className="mt-4">
            <label className="block mb-2">Category</label>
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="w-full border px-2 py-1"
            >
              <option value="">All Categories</option>
              <option value="performance">Performance</option>
              <option value="luxury">Luxury</option>
              <option value="suv">SUV</option>
              <option value="electric">Electric</option>
            </select>
          </div>

          {/* Price Filter */}
          <div className="mt-4">
            <label className="block mb-2">Price Range</label>
            <input
              type="range"
              name="minPrice"
              min="0"
              max="5000000"
              value={filters.minPrice}
              onChange={handleFilterChange}
              className="w-full"
            />
            <input
              type="range"
              name="maxPrice"
              min="0"
              max="5000000"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              className="w-full mt-2"
            />
            <div className="flex justify-between mt-2">
              <span>${filters.minPrice}</span>
              <span>${filters.maxPrice}</span>
            </div>
          </div>

          {/* Year Filter */}
          <div className="mt-4">
            <label className="block mb-2">Year</label>
            <select
              name="year"
              value={filters.year}
              onChange={handleFilterChange}
              className="w-full border px-2 py-1"
            >
              <option value="All">All Years</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020AndBelow">2020 and below</option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-3/4 p-4">
        <div className="py-2 sm:py-4 md:py-6 lg:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading ? (
            <p>Loading vehicles...</p>
          ) : (
            filteredData.map((vehicle, index) => (
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
  );
};

export default Shop;
