import axios from "axios";
import { createContext, useState } from "react";

export const ShopContext = createContext()

const ShopContextProvider = (props) =>{
   const currency = "$";
   const [showSearch,setShowSearch] = useState(false);
   const [search,setSearch] = useState("")
   const [isLoading,setIsLoading] = useState(false);
   const [productdata,setProductdata] = useState([])

   const fetchProductData = async () => {
      if (productdata.length > 0) return; 
      try {
         setIsLoading(true);
         const response = await axios.get('http://localhost:4000/api/vehicle/vehicles');
         setProductdata(response.data);
      } catch (error) {
         console.error("Error fetching product data:", error);
      } finally {
         setIsLoading(false);
      }
   };
   
   const value = {
      currency,
      showSearch,setShowSearch,
      search,setSearch,
      isLoading,setIsLoading,
      productdata,setProductdata,
      fetchProductData
   }

   return(
      <ShopContext.Provider value={value}>
         {props.children}
      </ShopContext.Provider> 
   )
}

export default ShopContextProvider