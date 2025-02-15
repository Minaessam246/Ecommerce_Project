import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Layout() {
    let x=useNavigate()
  useEffect(() => {
    localStorage.getItem("userToken")?x("/home"):x("/login")
   
     
   }, [])
  return (
   <>
   <Navbar/>
   <Outlet/>
   
   </>
  )
}
