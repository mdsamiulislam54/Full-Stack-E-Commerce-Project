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
import { useNavigate } from "react-router-dom";


const CategoryGallary = () => {
  const [Category, setCategory] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
       
            import.meta.env.VITE_CATEGORY_GET_URL || "http://localhost:5000/api/users/shop/data"
        );
        setCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
const handleHomePage = ()=>{
  navigate('/allproducts')
}
  return (
    <div className="   bg-gray-100  py-2">
      <div className="w-11/12 mx-auto my-10">
        <h1 className="sm:text-3xl text-xl font-medium mt-10 tracking-wider">Categories</h1>
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
          <div className="border   h-100">
            {Category?.map((item) => {
              return (
                <SwiperSlide key={item._id} className=" bg-light my-10 transition-all duration-500 rounded ">
                  <div className="relative  ">
                    {/* Background Image */}
                    <img
                      src={item.images}
                      alt={item.name}
                      className=" sm:w-50 w-40 h-40 sm:h-50 mx-auto object-contain mt-2 "
                      loading="lazy"
                    />

                    {/* Overlay (Black Background with Opacity) */}
                    <div className="flex flex-col items-center mb-5 ">
                      <h3 className="sm:text-xl my-2 tracking-wide font-medium font-dm-snas">{item.category}</h3>
                      <button onClick={handleHomePage} className="flex items-center gap-3 hover:bg-primary border border-gray-300 sm:px-4 px-2 py-1 rounded
                       hover:text-light hover:opacity-80 hover:ml-2 transition-all duration-300 cursor-pointer font-dm-snas">
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
