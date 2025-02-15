import axios from 'axios';
import  { useEffect, useState } from 'react'
import React from "react";
import Slider from "react-slick";



export default function Categories() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
    speed: 1200,
    autoplaySpeed: 2000,
    cssEase: "linear",
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  
      const [Categories, setCategories] = useState([])
      function getcat(){
axios.get(`https://ecommerce.routemisr.com/api/v1/categories`).then((res)=>{ setCategories(res.data.data)
})


      }
     useEffect(() => {
       getcat();
     
     
     }, [])
     
  return (
    <>
   
    <Slider {...settings}>
    {Categories.map((product)=>(
      <div className='w-36 slider2'>
<img src={product.image} className='h-72 w-full object-cover ' alt="" />
<h2 className='font-semibold '>{product.name}</h2>
</div>
    ))


    }</Slider>
    </>
  )
}
