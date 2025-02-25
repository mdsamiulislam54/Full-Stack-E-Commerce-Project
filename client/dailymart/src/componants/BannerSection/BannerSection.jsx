// import { useEffect, useState } from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
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

  // const nextHandaler = () => {
  //   setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
  // };

  // const prevhandaler = () => {
  //   setCurrentIndex(
  //     (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
  //   );
  // };

  return (
    <div className="grid grid-cols-6 gap-2 ">
      <div className="col-span-5">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{delay:1}}
          pagination={{ clickable: true }}
          navigation={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {bannerImages.length > 0 ? (
            bannerImages.map((image, index) => {
             return(
              <SwiperSlide key={index}>
              <img src={image} alt={image} />
            </SwiperSlide>
             )
            })
          ) : (
            <div>
              <p>no imges</p>
            </div>
          )}
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
          src="https://dropshop.com.bd/wp-content/uploads/2024/12/Neckbands-Web-Banner-Design_BDSHOP.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default BannerSection;
