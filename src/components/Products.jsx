import React, { useEffect, useState } from 'react'

import axios  from "axios";

export default function Products() {
const [products, setproducts] = useState([])
const [added, setadded] = useState(false)
const [preded, setpreded] = useState([])
const [query, setQuery] = useState('');
const [isLoading, setisLoading] = useState(true)
const filteredProducts = products.filter((product)=>(
  product.title.toLowerCase().includes(query.toLowerCase())
));


const handleSearchChange = (e) => {
  setQuery(e.target.value);
};
function fun(){
console.log("hello");
///wishlist 
  
} 
 function  getproducts(){
axios.get(`https://ecommerce.routemisr.com/api/v1/products`).then((res)=>{setproducts(res.data.data);
  setisLoading(false)
})
  }


  useEffect(() => {
getproducts();
  
  
  }, [])
  // console.log(products);
  
  
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

<div class="m-7 mt-12">
    <input    type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearchChange}class="bg-gray-50 w-[70%] mx-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
    <div className="flex flex-wrap gap-5 w-[80%] mx-auto">
{filteredProducts.map((product)=>(
  <div key={product.id} className="w-72 home_product ">
         {/* {product.id === preded && setadded(true)} */}
<img src={product.imageCover} className='w-full' alt="" />
<h3 className='py-3 px-2 category'>{product.category.name}</h3>
<h3  className='font-semibold px-2 py-2'>{product.title.split(" ").splice(0,2).join(" ")}</h3>
<div className="flex justify-between">
<h3 className='px-2'>{product.price} EGP</h3>

<div className='m-3'><i className="fa-solid fa-star text-amber-500"></i> {product.ratingsAverage}</div></div>
<div className='mr-3 flex justify-end home_heart'onClick={fun} ><i onClick={()=>{setpreded(preded.concat([product.id]))}} className ={`fa-solid fa-heart ${preded.includes(product.id) ? "text-red-300" : ""}`}  ></i> </div>
<div className="flex justify-center " >
 
<button className='home_but w-[75%] '>+Add</button></div>

</div>
))

}
      <div className='flex justify-center search items-center'>
<h2 className={`text-3xl  font-bold   text-black capitalize ${filteredProducts.length==0?"":"hidden"}`}> no matching products

</h2>
</div>


    </div>
    </>
  )
}
