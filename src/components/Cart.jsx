import React, { useContext, useEffect, useState } from 'react'
import  axios  from "axios";
import { CartContext } from '../Contexts/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { Formik} from 'formik';

export default function Cart() {
    const {addToCart} = useContext(CartContext)
    const [products, setproducts] = useState([])
    const [price, setprice] = useState(0)
    const [items, setitems] = useState(0)
    const [isLoading, setisLoading] = useState(true);
    const [empty, setempty] = useState(false)
   let x= useNavigate()
let {count,setcount}=useContext(CartContext);


    function getcart(){
        axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers:{token:localStorage.getItem("userToken")}}).then((res)=>{console.log(res.data.data.products);setproducts(res.data.data.products);
           setitems(res.data.numOfCartItems )
           setisLoading(false)
        setprice(res.data.data.totalCartPrice)

        }
        )
    }
    function delete_one(id){
        setisLoading(true)
        axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{headers:{token:localStorage.getItem("userToken")}}).then((res)=>{console.log(res);setproducts(res.data.data.products);   setitems(res.data.numOfCartItems )
            setprice(res.data.data.totalCartPrice)
            setcount(res.data.numOfCartItems)
setisLoading(false)
        }
        )
    }
    function update(id,count){
        setisLoading(true)
        axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count:count},{headers:{token:localStorage.getItem("userToken")}}).then((res)=>{console.log(res);setproducts(res.data.data.products);   setitems(res.data.numOfCartItems )
            setprice(res.data.data.totalCartPrice)
            setisLoading(false)
            setcount(res.data.numOfCartItems)

        }
        )
    }
    function clear(){
        axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{headers:{token:localStorage.getItem("userToken")}}).then((res)=>{console.log(res);setproducts([]);   setitems(0)
            setprice(0)
            setisLoading(false)
        x("/home")

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
  <div className="flex justify-between table_header">
<div className="left">
<h1>Cart Shop</h1>
<h2>total price: <span className='text-amber-300'>{price}</span> </h2>
</div>
<div className="right text-right">
<Link to={"/checkout"} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Check out</Link>

  <h2>total number of items: <span className='text-amber-300'>{items}</span> </h2>
</div>

  </div>
    <table class="w-full text-sm text-left rtl:text-right   text-gray-500 dark:text-gray-400">
       
        <tbody>
        {products.length!=0?
    
        products.map((product)=>(
<tr class=" flex justify-between items-center border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
               <div className="lefttable text-left "> <td class="p-4">
                    <img src={product.product.imageCover} class="w-16 md:w-32 max-w-full max-h-full inline" alt="iPhone 12"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.product.title}
                
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
               {product.price} EGP
                </td>
                <a onClick={()=>delete_one(product.product.id)} class="font-medium text-red-600 dark:text-red-500 hover:underline"><i class="fa-solid fa-trash m-2"></i>Remove</a>

                </td></div>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <button class="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                           
                         <button onClick={()=>update(product.product.id,product.count+1)}  className='text-black'>+</button>


                        </button>
                        <div class="ms-3">
                            <input type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={product.count} required />
                        </div>
                        <button class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                         <button onClick={()=>update(product.product.id,product.count-1)}  className='text-black'>-</button>
                        </button>
                    </div>
                </td>
             
            

    
            </tr> 
            


            )
        )     

            
            :<h1 className='text-3xl text-center font-bold text-black'>this cart is empty</h1>
            }
        {
            products.length!=0?(<tr className='text-center'><button onClick={clear} className='border-2 border-amber-400 text-2xl px-7 py-3 rounded-lg m-3'> Clear the cart</button></tr>):null
        }  

        </tbody>
    </table>
</div>

   </>
  )
}
