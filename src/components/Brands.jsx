
//https://ecommerce.routemisr.com/api/v1/brands


import React, { useEffect, useState } from 'react'

import axios  from "axios";

export default function Home() {
const [products, setproducts] = useState([])
const [isLoading, setisLoading] = useState(true)
 function  getproducts(){
axios.get(`https://ecommerce.routemisr.com/api/v1/brands`).then((res)=>{setproducts(res.data.data);
  setisLoading(false)
})
  }


  useEffect(() => {
getproducts();
  
  
  }, [])
  console.log(products);
  
  
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










    <div className="flex flex-wrap gap-5 w-[80%] mx-auto ">
{products.map((product)=>(
  <div key={product.id} className="w-80 home_product text-center products_item">
         
<img src={product.image} className='w-full h-56 object-cover' alt="" />
<h3 className='py-3 px-2 '>{product.name}</h3>


</div>
))

}


    </div>
    </>
  )
}
