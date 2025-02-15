import { createContext, use, useEffect } from "react";
import  axios  from "axios";
// import { react } from "eslint-plugin-react";
import React from 'react';  // Add this line
import { useState } from "react";

export  let CartContext = createContext()
export default function CartContextProvider(props){
    const [count, setcount] = useState(
      0)
const [cartID, setcartID] = useState("")
function addToCart(id){
return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId:id},{headers:{token:localStorage.getItem("userToken")}})
.then((res)=>{console.log(res.data);
    setcount(res.data.numOfCartItems)
    localStorage.setItem("cartnumber",res.data.numOfCartItems)
    return res;
})
.catch((err)=>err)
}

function checkout(vals){
  axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartID}?url=http://localhost:5173`,{shippingAddress:vals},{headers:{token:localStorage.getItem("userToken")}}).then((res)=>{console.log(res.data.session.url);
    window.location.href= res.data.session.url
  })

}
// useEffect(() => {
//   axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers:{token:localStorage.getItem("userToken")}}).then((res)=>{console.log(res.data.cartId);setcount(res.data.numOfCartItems);setcartID(res.data.cartId)
//   })

 
// }, [])



return (
    <CartContext.Provider value={{ addToCart ,count ,setcount,checkout,cartID,setcartID}}>
      {props.children}
    </CartContext.Provider>
  );
}