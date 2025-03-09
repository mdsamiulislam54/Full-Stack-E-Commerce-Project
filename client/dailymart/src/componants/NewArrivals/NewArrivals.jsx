import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetshproducts } from "../../redux/features/productsSlice";
import { CiShoppingCart,CiHeart,CiSearch } from "react-icons/ci";
import { HiMiniArrowPath } from "react-icons/hi2";


const NewArrivals = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("NewArrivales.json");
        const data = await response.json();
        setBanner(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetshproducts());
  }, [dispatch]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const newData = [1, 7, 11, 40, 59, 65, 24];

  const filteredProducts = products.filter((product) =>
    newData.includes(product.pID)
  );
  const NewArrivalesData = filteredProducts.slice(0, 4);
  const bestSell = filteredProducts.slice(4, filteredProducts.length);

  const discountCalculation = (price, discountPrice) => {
    const priceMain = parseFloat(price.replace("$", ""));
    const discountPricemain = parseFloat(discountPrice.replace("$", ""));
    console.log(
      "Parsed Price:",
      priceMain,
      "Parsed Discount Price:",
      discountPricemain
    );
    if (isNaN(priceMain) || isNaN(discountPricemain) || priceMain === 0) {
      return "Invalid input"; // যদি NaN হয় বা price 0 হয়, তাহলে error handle করা
    }
    const discount = ((priceMain - discountPricemain) / priceMain) * 100;
    return discount.toFixed();
  };

  return (
    <div className="my-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-0">
        <div className="grid grid-cols-6">
          <div className="col-span-4 ">
            <div className="flex justify-between items-center border-b-2 border-gray-300 pb-5 mb-5">
              <h3 className="text-xl font-normal tracking-wide">
                New Arrivals
              </h3>
              <Link className="flex items-center tracking-wide ">
                View All <MdKeyboardArrowRight size={25} />{" "}
              </Link>
            </div>
            <div className="relative">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                loop={true}
                modules={[Navigation]}
              >
                {banner.map((item) => (
                  <SwiperSlide key={item.id}>
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="absolute w-full h-full top-3/12 left-16">
                      <h2 className="sm:text-3xl font-dm-snas  tracking-wide mb-2 text-dark font-bold">
                        {item.heading}
                      </h2>
                      <h3 className="sm:text-2xl font-dm-snas font-bold tracking-wide mb-2 text-dark">
                        {item.subheading}
                      </h3>
                      <p className="sm:text-2xl font-dm-snas font-bold tracking-wide mb-4 text-dark ">
                        {item.offer}
                      </p>
                      <button className=" text-light py-2 px-4 rounded-md bg-dark hover:opacity-85 transition-all duration-300 cursor-pointer ">
                        {item.button}
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="">
              <div className="grid grid-cols-4 mt-10 gap-3 ">
                {NewArrivalesData.map((item, index) => {
                  return (
                    <div key={index} className="shadow bg-assent  ">
                      <div className="bg-light py-5 relative overflow-hidden mycart">
                        <img
                          src={item.img}
                          alt={item.title}
                          loading="lazy"
                          className="w-30 h-30 object-contain mx-auto"
                        />
                        <span className="absolute top-1 left-1 z-30  bg-secondary py-0.5 px-2 text-sm text-light rounded">
                          -{discountCalculation(item.price, item.discountPrice)}
                          %
                        </span>
                        <div className="absolute bottom-0 addcart">
                          <div className="">
                            <CiShoppingCart size={25} className="hover:text-secondary cursor-pointer transition-all duration-300"/>
                            <CiHeart size={25} className="hover:text-secondary cursor-pointer transition-all duration-300" />
                            <HiMiniArrowPath size={25} className="hover:text-secondary cursor-pointer transition-all duration-300" />
                            <CiSearch  size={25} className="hover:text-secondary cursor-pointer transition-all duration-300"/>
                          </div>
                      </div>
                      </div>
                   
                      <div className="p-2  ">
                        <h3 className="font-medium tracking-wide">
                          {item.title}...
                        </h3>
                        <div>
                          <div className="flex items-center justify-between">
                         
                          <span>{item.review}</span>
                          <span>{item.rating}</span>
                          </div>
                          <div className="flex gap-5 items-center">
                            <span className="text-lg font-dm-snas font-bold">
                              {item.discountPrice}
                            </span>
                            <span className="text-md font-dm-snas text-gray-600 line-through font-bold">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
