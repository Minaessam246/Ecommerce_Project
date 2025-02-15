import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { CartContext } from '../Contexts/cartContext';
import Slider from 'react-slick'

export default function Product_details() {
  const [isLoading, setisLoading] = useState(true)
    const [products, setproducts] = useState([])
    const [added, setadded] = useState(false)
    const [preded, setpreded] = useState([])
    let {addToCart}=useContext(CartContext);
    
  
let {id}= useParams()
async function addtocart(id){
  setisLoading(true)
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
  function fun(){
    setisLoading(true)
      axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{productId:id},{headers:{token:localStorage.getItem("userToken")}})
      .then((res)=>{console.log(res);console.log(id);
      
    setisLoading(false)
        toast(    <div>
          <i className="fas fa-check-circle" style={{ marginRight: '10px' ,fontSize:"20px",backgroundColor:"4caf50", color:"white"}}></i>
          your product added successefully to wishlist
        </div>, {
          
          className:"my_toast"
        });
    }
      ).catch((err)=>console.log(err))
    
    
      
    } 
const [product, setproduct] = useState({})
const [images, setimages] = useState([])
    function getProduct(){
axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`).then((res)=>{console.log(res.data.data.images);setisLoading(false)
    setproduct(res.data.data)
    setimages(res.data.data.images)
})
    }
    useEffect(() => {
      
    
      getProduct()
    }, [])
    

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
    
      slidesToScroll: 1
    };

  
  
  
  return (
    < >




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
 <div className="flex  justify-center w-[80%] mx-auto items-center my-6 flex-wrap">


<div className=''> <div className="my-20 w-96   slider_right">
    <Slider {...settings}>
  <img src={images[0]} className='h-max  object-cover' alt="" />
  <img src={images[1]} className='h-max  object-cover' alt="" />
  
  </Slider></div>
 
  </div>
<div className="w-3xl flex-col justify-center items-center">
<h2 className='regisiter_header'>{product.title} </h2>
<p>{product.description}</p>
<h3>{product.price}EGP </h3>
<button className='= details_but w-[75%] flex justify-center mx-auto'  onClick={()=>(addtocart(id))} >+Add</button></div>
 

<div className="flex flex-col">

<div className='m-3'><i className="fa-solid fa-star text-amber-500"></i> {product.ratingsAverage}</div>
<Link className='mr-3 flex justify-end home_heart'onClick={()=>fun()} ><i onClick={()=>{setpreded(preded.concat([product.id]))}} className ={`fa-solid fa-heart ${preded.includes(product.id) ? "text-red-300" : ""}`}  ></i> </Link>

 <Toaster
  position="top-right"
  reverseOrder={false}
  
 />
<div className="flex justify-center " >
</div>
</div>
</div>



    
    </>
  )
}
