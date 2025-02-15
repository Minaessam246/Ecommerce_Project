import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import { useContext } from "react";
import  axios  from "axios";
import * as yup from "yup"

export default function Reset_password() {
  let x=useNavigate();
  const [errmessage, seterrmessage] = useState("")
  let valid=yup.object().shape({
    email:yup.string().matches(/^.+@(gmail.com|yahoo.com)$/).required(),
    newPassword:yup.string().min(6,"too short password").matches(/^.*[a-z].*$/,"must contain characters").required(),


  })
  let formik =useFormik({
    initialValues:{
      email:"",
      newPassword:"",
    },
      validationSchema:valid,
      onSubmit:(vals)=>{
        axios.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,vals)
        .then((res)=>{console.log(res);
          localStorage.setItem("userToken",res.data.token);
          x("/home");

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
   
    <Link  to={"/signin"}>Log in</Link>
    <Link  to={"/signup"}>Register</Link>
    </div>
  </div>
</nav>
{errmessage!=""?<div class="p-4 m-4 text-sm w-[70%] mx-auto text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span class="font-medium">{errmessage} </span> </div>:null}
<form action="" onSubmit={formik.handleSubmit} className='w-[70%] mx-auto mt-16'>
  <h1 className='regisiter_header'>reset your account password</h1>
   

    <label htmlFor="Email:" className="block mb-4 text-sm font-normal text-gray-900 dark:text-white">Email:</label>
    <input name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/ >

    {formik.errors.email&& formik.touched.email?<div class="p-4 m-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Danger alert!</span> {formik.errors.email}
</div>:null}
    <label htmlFor="newPassword" className="block mb-4 text-sm font-normal text-gray-900 dark:text-white">newPassword:</label>
    <input name='newPassword' value={formik.values.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/ >
    {formik.errors.newPassword&&formik.touched.newPassword?<div class="p-4 m-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">Danger alert!</span> {formik.errors.newPassword}
</div>:null}

  
<div className='flex justify-start'>
    <button type="submit" className="text-gray-900 m-4   bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Reset password</button>
</div>
</form>




    </>
  )
}
