import banner1 from "../assets/imaged/1.webp"
import banner2 from "../assets/imaged/2.webp"
import banner3 from "../assets/imaged/3.webp"
import banner4 from "../assets/imaged/1 (2).webp"
import banner5 from "../assets/imaged/2 (3).webp"
// import { GrNext, GrPrevious } from "react-icons/gr";

import { Swiper, SwiperSlide } from 'swiper/react';
// import {Autoplay,Navigation} from "swiper/modules"


import 'swiper/css';
const banners = [
  {
    id: 1,
    title: "Upgrade Your Phone with the Latest Releases",
    category: "NEW ARRIVALS",
    image: banner1,
  },
  {
    id: 2,
    title: "Full design control at any resolution",
    category: "OPTIONAL LABEL",
    image: banner2,
  },
  {
    id: 3,
    title: "Best mobile potions for any screen size",
    category: "JOURNA LAYOUTS",
    image: banner3,
  },
];
const offers = [
  {
    id: 1,
    category: "WEARABLES",
    title: "Multiple Variants to Choose From",
    image: banner4,
  },
  {
    id: 2,
    category: "TABLETS",
    title: "High Resolution Tablets",
    image: banner5,
  },
];

export default function Hero() {
  return (
    <div className="">
      <div className="my-6 grid gap-4 grid-cols-1 lg:grid-cols-12">
      <div className="h-[60vh] grid grid-cols-1  lg:col-span-8 relative">
        <div className="flex flex-col justify-center  ">
        
        <Swiper className="size-full">
          {banners.map((item) => (
            <SwiperSlide className="size-full">

              <div
                key={item.id}
                className="bg-gray-100 rounded-lg p-10 flex items-center justify-between mb-6 size-full"
              >
                {/* Text */}
                <div className="max-w-lg">
                  <span className="text-orange-500 uppercase text-sm">
                    {item.category}
                  </span>

                  <h1 className="text-4xl font-bold mt-4 mb-8">
                    {item.title}
                  </h1>

                  <button className="border border-gray-400 px-8 py-3 rounded-md hover:bg-gray-400 hover:text-white transition">
                    Shop Now
                  </button>
                </div>

                {/* Image */}
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-87.5 object-contain" />
                </div>
              </div>

            </SwiperSlide>


          ))}

        </Swiper>
       

      </div>
    </div>
    
    
    
    <div className="h-[30vh]  grid grid-cols-1  lg:col-span-4">
        <div className="flex flex-col  gap-2">
          {offers.map((item) => (
            <div
              key={item.id}
              className="bg-[#f5f5f5] rounded-xl h-[30vh] flex items-center justify-between px-8 relative overflow-hidden"
            >
              {/* الشكل المائل */}
              <div className="absolute right-0 top-0 w-[40%] h-full bg-white opacity-50 skew-x-[-35deg] translate-x-24"></div>

              {/* المحتوى */}
              <div className="z-10">
                <p className="text-[#ff7a59] text-sm font-medium mb-4">
                  {item.category}
                </p>

                <h2 className="text-md font-bold text-slate-800 leading-tight mb-4 flex flex-nowrap">
                  {item.title}
                </h2>

                <button className="border border-gray-400 px-7 py-2 rounded-md hover:bg-gray-400 hover:text-white transition">
                  Shop Now
                </button>
              </div>

              {/* الصورة */}
              <div className="z-10">
                <img
                  src={item.image}
                  alt=""
                  className="w-50 object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div> 
      </div>
       </div>
    

  )
}
