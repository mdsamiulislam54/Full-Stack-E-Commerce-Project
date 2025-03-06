import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import axios from "axios";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// Import required modules
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

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
    <div className="py-0 max-w-screen-xl mx-auto">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-2xl font-bold mt-10">Our Categories</h1>
        <Swiper
          effect={"coverflow"}
          spaceBetween={50}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="category-swiper"
        >
          {Category.map((item) => {
            return (
              <SwiperSlide key={item._id} className="">
                <div className="relative group swiper-slide">
                  {/* Background Image */}
                  <img
                    src={item.images}
                    alt={item.name}
                    className="w-full  object-cover transition duration-300 rounded-md swiper-slide img "
                  />

                  {/* Overlay (Black Background with Opacity) */}
                  <div className="absolute inset-0 bg-black opacity-0  flex flex-col items-center justify-center text-white p-4 transition duration-300 group-hover:opacity-80 rounded-md">
                    <h2 className="text-xl font-medium text-center">
                      {item.category}
                    </h2>
                    <button className="mt-2 px-4 py-2 bg-dark text-secondary rounded-xl hover:cursor-pointer opacity-100 ">
                      Shop Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div className="swiper-control absolute  z-50 buttom -[45%] flex  w-full gap-10 ">
            <div className="swiper-button-next custom-next bg-primary rounded-2xl hover:opacity-85 transition-all duration-300 ">
              <span>
                <MdKeyboardArrowLeft
                  size={40}
                  className=" text-light hover:cursor-pointer"
                />
              </span>
            </div>
            <div className="swiper-button-prev custom-prev  bg-primary rounded-2xl hover:opacity-85 transition-all duration-300">
              <span>
                <MdKeyboardArrowRight
                  size={40}
                  className="text-light hover:cursor-pointer"
                />
              </span>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryGallary;
