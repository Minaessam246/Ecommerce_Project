import React, { useContext, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../Contexts/CartContext'
import axios from 'axios'
export default function Navbar() {
  let {count ,cartID,setcartID,setcount}=useContext(CartContext)



useEffect(() => {
  

  axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers:{token:localStorage.getItem("userToken")}}).then((res)=>{console.log(res.data.cartId);setcount(res.data.numOfCartItems);setcartID(res.data.cartId)
  })
}, [])

  
  return (
    <>
    

<nav className="  ">
  <div className=" flex flex-wrap items-center justify-around w-full  p-4">
    <Link to="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
    <i className="fa-solid fa-cart-shopping text-4xl "></i>

        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">freshCart</span>
    </Link>
  
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
        <li>
          <NavLink to="/home"  activeclassname="active" className="block py-2 px-3  bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cart"  activeclassname="active" className="block py-2 px-3  bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Cart</NavLink>
        </li>
        <li>
          <NavLink to="/wishlist"  activeclassname="active" className="block py-2 px-3  bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Wish List</NavLink>
        </li>
        <li>
          <NavLink to="/products"  activeclassname="active" className="block py-2 px-3  bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Products</NavLink>
        </li>
        <li>
          <NavLink to="/categories"  activeclassname="active" className="block py-2 px-3  bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Categories</NavLink>
        </li>
        <li>
          <NavLink to="/brands"  activeclassname="active" className="block py-2 px-3  bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Brands</NavLink>
        </li>
       
      </ul>
    </div> 
   
    <div className='flex gap-5  items-center text-center navitem3 ' >
    <i className="fa-solid fa-cart-shopping text-3xl relative "> <div className=" w-5 h-5  absolute -top-2 -right-2 cartCounter flex items-center justify-center text-white">
     {count}
     
     </div></i>
    <Link onClick={()=>{localStorage.removeItem("userToken");localStorage.removeItem("cartnumber");}} to={"/login"}>Log Out</Link>
    </div>
  </div>
</nav>

    </>
  )
}
