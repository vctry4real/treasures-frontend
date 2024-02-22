import React from "react";
import { useSwiper } from "swiper/react";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";


const SwiperButtons = () => {
    const swipe = useSwiper ()
  return (
    <div className="w-full flex absolute right-0 top-0">
        <button className="text-green-500 mr-6" onClick={()=>swipe.slidePrev()}><FaLessThan/></button>
        <button className="text-green-500" onClick={()=>swipe.slideNext()}><FaGreaterThan/></button>
    </div>
  )
}

export default SwiperButtons