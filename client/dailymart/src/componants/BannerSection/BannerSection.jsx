// import { useEffect, useState } from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { MdKeyboardArrowLeft ,MdKeyboardArrowRight} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";
const BannerSection = () => {
  const [bannerImages, setBannerImages] = useState([]);

  useEffect(() => {
    const fetachData = async () => {
      try {
        const response = await fetch("/BannerImages.json");
        const data = await response.json();
        setBannerImages(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetachData();
  }, []);
  console.log(bannerImages);


  return (
   <div className="bg-assent">
     <div className="grid grid-cols-6 gap-2 sm:max-w-screen-xl mx-auto ">
      <div className="col-span-5 ">
        <Swiper
          modules={[Navigation, Pagination, A11y,Autoplay]}
          spaceBetween={50}
          loop={true}
          draggable={true}
          slidesPerView={1}
          autoplay={{ delay: 3000,disableOnInteraction: false, }}
          pagination={{ clickable: true,   }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
            
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="relative"
        >
          {bannerImages.length > 0 ? (
            bannerImages.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={image} alt={image} className="h-full" />
                </SwiperSlide>
              );
            })
          ) : (
            <div>
              <p>no imges</p>
            </div>
          )}

          <div className="swiper-control absolute left-0 z-50 top-[45%] flex justify-between w-full ">
            <div className="swiper-button-next custom-next  ">
              <span><MdKeyboardArrowLeft size={40} className="text-secondary hover:cursor-pointer"/></span>
            </div>
            <div className="swiper-button-prev custom-prev">
              <span><MdKeyboardArrowRight  size={40} className="text-secondary hover:cursor-pointer"/></span>
            </div>
          </div>
        </Swiper>
      </div>
      <div className="col-span-1 flex flex-col gap-1">
        <img
          src="https://images.othoba.com/images/thumbs/0727422_tv%20right%20side%20banner%20web.jpeg"
          alt=""
        />
        <img
          src="https://images.othoba.com/images/thumbs/0724232_Right%20side%20banar%20web.jpeg"
          alt=""
        />
        <img
          className="h-[173px]"
          src="https://dropshop.com.bd/wp-content/uploads/2024/12/Neckbands-Web-Banner-Design_BDSHOP.jpg"
          alt=""
        />
      </div>
    </div>
   </div>
  );
};

export default BannerSection;
