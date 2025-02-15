import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import { useContext } from "react";
import  axios  from "axios";
import * as yup from "yup"

export default function Regisiter() {
  let x=useNavigate()
  const [errmessage, seterrmessage] = useState("")
  let valid=yup.object().shape({
    name:yup.string().min(3,"too short").max(12,"too long").required(),
    email:yup.string().matches(/^.+@(gmail.com|yahoo.com)$/).required(),
    password:yup.string().min(6,"too short password").matches(/^.*[a-z].*$/,"must contain characters").required(),
rePassword:yup.string().oneOf([yup.ref("password")],"must be the same as password").required(),
    phone:yup.string().matches(/^01[0125].*$/).min(11,"must be 11 numbers").max(11,"must be 11 numbers").required()

  })
  let formik =useFormik({
    initialValues:{ name:"",
      email:"",
      password:"",
      rePassword:"",
      phone:""},
      validationSchema:valid,
      onSubmit:(vals)=>{
        axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,vals)
        .then((res)=>{console.log(res);
          x("/login")
      }).catch((err)=>{console.log(err.response.data.message);
        seterrmessage(err.response.data.message)
      })
        
      }
  }
);

  return (
    <>
    
    
    
    
    
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
{errmessage!=""?<div class="p-4 m-4 text-sm w-[70%] mx-auto text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span class="font-medium">{errmessage} </span> </div>:null}
<form action="" onSubmit={formik.handleSubmit} className='w-[70%] mx-auto mt-16'>
  <h1 className='regisiter_header'>Register now</h1>
    <label    className="block mb-4 text-sm   font-normal text-gray-900 dark:text-white">Name:</label>
    <input name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/ >
{formik.errors.name && formik.touched.name?<div class="p-4 m-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Danger alert! {formik.errors.name}</span> 
</div>:null}

    <label htmlFor="Email:" className="block mb-4 text-sm font-normal text-gray-900 dark:text-white">Email:</label>
    <input name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/ >

    {formik.errors.email&& formik.touched.email?<div class="p-4 m-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Danger alert!</span> {formik.errors.email}
</div>:null}
    <label htmlFor="Password" className="block mb-4 text-sm font-normal text-gray-900 dark:text-white">Password:</label>
    <input name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/ >
    {formik.errors.password&&formik.touched.password?<div class="p-4 m-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Danger alert!</span> {formik.errors.password}
</div>:null}

    <label htmlFor="Repassword:" className="block mb-4 text-sm font-normal text-gray-900 dark:text-white">Repassword:</label>
    <input name='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur}  type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/ >
    {formik.errors.rePassword&&formik.touched.rePassword?<div class="p-4 m-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Danger alert!</span> {formik.errors.rePassword}
</div>:null}

    <label htmlFor="Phone:" className="block mb-4 text-sm font-normal text-gray-900 dark:text-white ">Phone:</label>
    
    <input name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/ >
    {formik.errors.phone&&formik.touched.phone?<div class="p-4 m-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Danger alert!</span>{formik.errors.phone}
</div>:null}
<div className='flex justify-end'>
    <button type="submit" className="text-gray-900 m-4   bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Register Now</button>
</div>
</form>




    </>
  )
}
