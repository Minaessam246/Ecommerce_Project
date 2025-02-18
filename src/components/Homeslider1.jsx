import React from 'react'

import slider1 from "../assets/drive-download-20250125T182520Z-001/slider-2.jpeg"
import slider3 from "../assets/drive-download-20250125T182520Z-001/slider-image-2.jpeg"
import slider2 from "../assets/drive-download-20250125T182520Z-001/slider-image-1.jpeg"
import slider4 from "../assets/drive-download-20250125T182520Z-001/slider-image-3.jpeg"
import Slider from 'react-slick'
export default function Homeslider1() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
      
        slidesToScroll: 1
      };
  return (
    <><div className=" flex-wrap flex justify-center ">
    
    
    <div className="my-20 w-96  slider_right">
      <Slider {...settings}>
    <img src={slider1} className='h-96  object-cover' alt="" />
    <img src={slider2} className='h-96  object-cover' alt="" />
    </Slider></div>
    <div className=" flex flex-col w-1/4 mt-20 slider_left">
    <img src={slider1} className='w-full h-48 object-cover' alt="" />
    <img src={slider4} className='w-full h-48 object-cover' alt="" />
    </div></div>
    </>
    
)
}
