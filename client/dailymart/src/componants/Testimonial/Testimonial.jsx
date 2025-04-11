import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteRight } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import "./style.css";
const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("testimonial.json");
        const data = await response.json();
        setTestimonial(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="my-20 py-4 bg-assent">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col gap-4 items-center justify-center  pb-10 ">
          <h2 className="font-dm-snas text-4xl font-semibold tracking-wide text-center">
            Our satisfied customer says
          </h2>
          <p className="text-center text-sm tracking-wide">
            Far far away, behind the word mountains, far from the countries
            <br></br>
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in
          </p>
        </div>
        <div className="py-5 ">
          <Swiper
            slidesPerView={3}
            grid={{
              fill: "row",
              rows: 2,
            }}
            
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="swiper"
            breakpoints={{
                320: {
                  slidesPerView: 1, // Mobile devices
                },
                640: {
                  slidesPerView: 2, // Small screens
                },
                768: {
                  slidesPerView: 3, // Medium screens
                },
                1024: {
                  slidesPerView: 3, // Large screens
                },
              }}
          >
            {testimonial.map((item, index) => (
              <SwiperSlide key={index} className="swiper-slide mb-10 bg-light rounded-xl  shadow ">
                <div className="flex flex-col gap-4 items-center justify-center   p-2">
                  <div className=" w-20 h-20 rounded-full overflow-hidden shadow-sm ">
                    <img
                      className="w-full relative h-full object-cover hover:scale-125 transition-all duration-300"
                      src={item.images}
                      alt={item.name}
                    />
                    <div>
                      <FaQuoteRight className="w-5 h-5 text-secondary absolute top-20 left-69 -mt-2 -ml-2" />
                    </div>
                  </div>
                  <p className="text-[12px] tracking-wide text-center text-gray-500">
                    {item.date}
                  </p>
                  <p className="text-xl font-semibold  tracking-wider text-center">
                    {item.name}
                  </p>
                  <p className="text-sm tracking-wider text-center">
                    {item.message}
                  </p>
                  <p className="text-md tracking-wider text-center">
                    {item.email}
                  </p>
                  <p className="text-md tracking-wider text-center">
                    {item.phone}
                  </p>
                  <p className="text-md tracking-wider text-center">
                    {item.city}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
