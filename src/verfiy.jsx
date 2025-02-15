import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import { useContext } from "react";
import  axios  from "axios";
import * as yup from "yup"

export default function Verfiy() {
  const [isLoading, setisLoading] = useState(false)
  let x=useNavigate();
  const [errmessage, seterrmessage] = useState("")
 
  let formik =useFormik({
    initialValues:{
      resetCode:"",
      
    },
     
      onSubmit:(vals)=>{
        axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,vals)
        .then((res)=>{console.log(res);
          setisLoading(false)
      x("/reset_password");
      

      }).catch((err)=>{console.log(err.response.data.message);
       seterrmessage(err.response.data.message)
       setisLoading(false)
      })
        
      }
  }
);

  return (
    <>
    
    
     <div className={`loading fixed   top-0 left-0 right-0 bottom-0 ${isLoading?"":"hidden"}`} >

    <div className="flex loader justify-center items-center text-center">
    <div class="sk-chase ">
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
</div></div>


    </div>
    
    
    
     <nav className="  ">
  <div className=" flex flex-wrap items-center justify-between   p-4 w-[80%] mx-auto">
    <Link to="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
    <i className="fa-solid fa-cart-shopping text-4xl "></i>

        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">freshCart</span>
    </Link>
  
    
   
    <div className='flex gap-5  items-center text-center navitem3 ' >
   
    <Link  to={"/login"}>Log in</Link>
    <Link  to={"/signup"}>Register</Link>
    </div>
  </div>
</nav>

<form action="" onSubmit={formik.handleSubmit} className='w-[70%] mx-auto mt-16'>
  <h1 className='regisiter_header'>please enter your verification code
  </h1>
   

    <label htmlFor="code:" className="block mb-4 text-sm font-normal text-gray-900 dark:text-white">code:</label>
    <input name='resetCode' value={formik.values.resetCode} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/ >
    {errmessage!=""?<div class="p-4 m-4 text-sm w-full mx-auto text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span class="font-medium">{errmessage} </span> </div>:null}
 

  
<div className='flex justify-start'>
    <button type="submit" onClick={()=>{setisLoading(true)}} className="text-gray-900 m-4   bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Verify</button>
</div>
</form>




    </>
  )
}
