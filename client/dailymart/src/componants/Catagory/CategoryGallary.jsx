import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";

import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import './style.css'

// Import required modules
import { Autoplay, FreeMode ,Pagination} from "swiper/modules";

const CategoryGallary = () => {
  const [Category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/users/shop/data"
        );
        setCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className=" px-4 sm:px-0 bg-assent  py-2">
      <div className="max-w-screen-xl mx-auto my-10">
        <h1 className="text-3xl font-medium mt-10 tracking-wider">Our Categories</h1>
        <Swiper
          spaceBetween={30}
         
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Autoplay,Pagination]}
          breakpoints={{
            // breakpoints
            640: { slidesPerView: 2, },
            740 : { slidesPerView:2},
            1024: { slidesPerView: 3, },
            1440: { slidesPerView: 4, },
          }}
          className="mySwiper"
        
        >
          <div className="border bg-assent  h-100">
            {Category.map((item) => {
              return (
                <SwiperSlide key={item._id} className=" bg-light my-10 transition-all duration-500 rounded ">
                  <div className="relative  ">
                    {/* Background Image */}
                    <img
                      src={item.images}
                      alt={item.name}
                      className=" w-50 h-50 mx-auto object-contain mt-2 "
                    />

                    {/* Overlay (Black Background with Opacity) */}
                    <div className="flex flex-col items-center mb-5 ">
                      <h3 className="sm:text-xl my-2 tracking-wide font-medium font-dm-snas">{item.category}</h3>
                      <button className="flex items-center gap-3 bg-primary sm:px-4 px-2 py-1 rounded
                       text-light hover:text-secondary hover:ml-2 transition-all duration-300 cursor-pointer font-dm-snas">
                        Shop Now
                        <FaArrowRight className="ml-2" />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryGallary;
