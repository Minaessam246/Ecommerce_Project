import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import { useContext } from "react";
import  axios  from "axios";
import * as yup from "yup"
import { CartContext } from '../Contexts/cartContext';

export default function Checkout() {
 let {checkout}=   useContext(CartContext)
  let x=useNavigate();
 let{count,setcount}= useContext(CartContext)
  const [errmessage, seterrmessage] = useState("")
  let valid=yup.object().shape({
    phone:yup.string().matches(/^01[0125].*$/).min(11,"must be 11 numbers").max(11,"must be 11 numbers").required(),

    details:yup.string().required("details are required"),
    city:yup.string().required("city is required")
    

  })
  let formik =useFormik({
    initialValues:{
     details: "",
        phone: "",
        city: ""
    },
      validationSchema:valid,
      onSubmit:(vals)=>{
       checkout(vals);
       
        
      }
  }
);



  return (
    <>
    
    
    
    
    

{errmessage!=""?<div class="p-4 m-4 text-sm w-[70%] mx-auto text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span class="font-medium">{errmessage} </span> </div>:null}
<form action="" onSubmit={formik.handleSubmit} className='w-[70%] mx-auto mt-16'>
  
   

    <label htmlFor="details:" className="block mb-4 text-sm font-normal text-gray-900 dark:text-white">Details:</label>
    <input name='details' value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/ >

    {formik.errors.details&& formik.touched.details?<div class="p-4 m-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Danger alert!</span> {formik.errors.details}
</div>:null}
    <label htmlFor="phone" className="block mb-4 text-sm font-normal text-gray-900 dark:text-white">Phone:</label>
    <input name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/ >
    {formik.errors.phone&&formik.touched.phone?<div class="p-4 m-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Danger alert!</span> {formik.errors.phone}
</div>:null}
    <label htmlFor="city" className="block mb-4 text-sm font-normal text-gray-900 dark:text-white">City:</label>
    <input name='city' value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/ >
    {formik.errors.city&&formik.touched.city?<div class="p-4 m-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Danger alert!</span> {formik.errors.city}
</div>:null}

  
<div className='w-full'>
    <button type="submit" className="text-gray-900 my-4  w-full bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">pay now</button>
</div>
</form>




    </>
  )
}
