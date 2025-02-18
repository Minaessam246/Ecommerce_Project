import React, { useContext, useEffect, useState } from 'react'
import  axios  from "axios";
import toast, { Toaster } from 'react-hot-toast';

import { CartContext } from '../Contexts/CartContext';
import { data, Link } from 'react-router-dom';
import { Formik} from 'formik';

export default function Wishlist() {
    const {addToCart} = useContext(CartContext)
    const [products, setproducts] = useState([])
    const [price, setprice] = useState(0)
    const [items, setitems] = useState(0)
    const [isLoading, setisLoading] = useState(true)
let {count,setcount}=useContext(CartContext)
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

    function getcart(){
        axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers:{token:localStorage.getItem("userToken")}}).then((res)=>{console.log(res);setproducts(res.data.data);
        setisLoading(false)
          setitems(res.data.count)
        }
        )
    }
    function delete_one(id){
      setisLoading(true)
        axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{headers:{token:localStorage.getItem("userToken")}}).then((res)=>{
        axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers:{token:localStorage.getItem("userToken")}}).then((res)=>{
     setproducts(res.data.data)
     setitems(res.data.count)
setisLoading(false)
        })
       } ) 
    }
    function update(id,count){
        axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count:count},{headers:{token:localStorage.getItem("userToken")}}).then((res)=>{console.log(res);setproducts(res.data.data.products);   setitems(res.data.numOfCartItems )
            setprice(res.data.data.totalCartPrice)
            setcount(res.data.numOfCartItems)
        }
        )
    }
  

    useEffect(() => {
      getcart()
    
      
    }, [])
    

  return (
   <>
     <div className={`loading fixed  z-20 top-0 left-0 right-0 bottom-0 ${isLoading?"":"hidden"}`} >

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
   

<div class="relative overflow-x-auto shadow-md  p-5 sm:rounded-lg mx-auto w-[80%] bg-gray-50 mt-36">
 <div className="flex">
<div className="left_wish">
<h1>My Wishlist</h1>

</div>
</div>

  
    <table class="w-full text-sm text-left rtl:text-right   text-gray-500 dark:text-gray-400">
       
        <tbody>
            {products.map((product)=>(
<tr class=" flex justify-between items-center border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
               <div className="lefttable text-left "> <td class="p-4">
                    <img src={product.imageCover} class="w-16 md:w-32 max-w-full max-h-full inline" alt="iPhone 12"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.title}
                
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              <div className='wish_price'>  {product.price} EGP</div>
                </td>
                <a onClick={()=>delete_one(product.id)} class="font-medium text-red-600 dark:text-red-500 hover:underline"><i class="fa-solid fa-trash m-2"></i>Remove</a>

                </td></div>
                <td class="px-6 py-4">
                
                   <button  onClick={()=>(addtocart(product.id))} className='px-5 py-3 text-stone-950 add_wish bg-transparent  border-amber-300 border-2 rounded-lg'>add to Cart</button>
                   <Toaster
  position="top-right"
  reverseOrder={false}
  
 />
                </td>
             
            
            </tr>  


            ))}
     
        </tbody>
    </table>
</div>

   </>
  )
}
