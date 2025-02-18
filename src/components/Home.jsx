import React, { useContext, useEffect, useState } from 'react'
 import toast, { Toaster } from 'react-hot-toast';
import axios  from "axios";
// import Slide1 from "../assets/1680391434638-cover.jpeg"
import { Link } from 'react-router-dom';
import  { CartContext } from '../Contexts/CartContext';
import Homeslider from './Homeslider';
import  * as yup  from "yup";
import Homeslider1 from './Homeslider1';
export default function Home() {
 
  



const [products, setproducts] = useState([])
const [added, setadded] = useState(false)
const [preded, setpreded] = useState([])
const [query, setQuery] = useState('');


  const filteredProducts = products.filter((product)=>(
    product.title.toLowerCase().includes(query.toLowerCase())
  ));

 
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

let {addToCart}=useContext(CartContext);
let names=[];
function fun(id){
  axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{productId:id},{headers:{token:localStorage.getItem("userToken")}})
  .then((res)=>{console.log(res);console.log(id);
  

    toast(    <div>
      <i className="fas fa-check-circle" style={{ marginRight: '10px' ,fontSize:"20px",backgroundColor:"4caf50", color:"white"}}></i>
      your product added successefully to wishlist
    </div>, {
      
      className:"my_toast"
    });
}
  ).catch((err)=>console.log(err))


  
} 


  async function addtocart(id){
  // setisLoading(true)
let response= await addToCart(id)
console.log(response);
setisLoading(false)
toast(    <div>
  <i className="fas fa-check-circle" style={{ marginRight: '10px' ,fontSize:"20px",backgroundColor:"4caf50", color:"white"}}></i>
  your product added successefully to cart
</div>, {
  
  className:"my_toast"
});

}
 function  getproducts(){
  setisLoading(true)
axios.get(`https://ecommerce.routemisr.com/api/v1/products`).then((res)=>{setproducts(res.data.data);setisLoading(false);
 
  
}).catch((err)=>console.log(err)
)
  }


  useEffect(() => {
getproducts();


axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{productId:"6428bd0bdc1175abc65c9fdb"},{headers:{token:localStorage.getItem("userToken")}})
.then((res)=>{



axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/6428bd0bdc1175abc65c9fdb`,{headers:{token:localStorage.getItem("userToken")}})
.then((res)=>{console.log(res);
setpreded(res.data.data)

})
}

).catch((err)=>console.log(err))
  }, [])
  
  
  const [isLoading, setisLoading] = useState(true);
  return (
    <>
    <div className='w-[60%] mx-auto Homeslider1'><Homeslider1/></div>
   <div className='w-[97%] mx-auto'><Homeslider/></div>
    
    
    <div class="m-7 mt-12">
    <input    type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearchChange}class="bg-gray-50 w-[70%] mx-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
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













    <div className="flex flex-wrap gap-5 w-[80%] mx-auto">
{filteredProducts.map((product)=>(


  <Link key={product.id} onClick={()=>{getproducts()}}  to={`${product.id}`}>
  <div  className="w-72 home_product ">
        
<img src={product.imageCover} className='w-full' alt="" />
<h3 className='py-3 px-2 category'>{product.category.name}</h3>
<h3  className='font-semibold px-2 py-2'>{product.title.split(" ").splice(0,2).join(" ")}</h3>
<div className="flex justify-between">
<h3 className='px-2'>{product.price} EGP</h3>

<div className='m-3'><i className="fa-solid fa-star text-amber-500"></i> {product.ratingsAverage}</div></div>
<Link className='mr-3 flex justify-end home_heart'onClick={()=>fun(product.id)} ><i onClick={()=>{setpreded(preded.concat([product.id]))}} className ={`fa-solid fa-heart ${preded.includes(product.id) ? "text-red-300" : ""}`}  ></i> </Link>
<div className="flex justify-center "  >
 <Link className='home_but w-[75%] flex justify-center '  onClick={()=>(addtocart(product.id))} >+Add</Link>
 <Toaster
  position="top-right"
  reverseOrder={false}
  
 />
</div>
</div>
</Link>

))

}


    </div>
    </>
  )
}
