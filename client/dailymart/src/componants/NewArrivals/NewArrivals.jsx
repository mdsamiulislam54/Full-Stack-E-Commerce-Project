import {Link} from 'react-router-dom'
import { MdKeyboardArrowRight} from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { useEffect, useState } from 'react';

const NewArrivals = () => {
  const [banner, setBanner ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('NewArrivales.json');
        const data = await response.json();
        setBanner(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  },[])
 
  return (
    <div className='my-10'>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-0">
          <div className='grid grid-cols-6'>
            <div className='col-span-4 '>
              <div className='flex justify-between items-center border-b-2 border-gray-300 pb-5 mb-5'>
                <h3 className='text-xl font-normal tracking-wide'>New Arrivals</h3>
                <Link className='flex items-center tracking-wide '>View All <MdKeyboardArrowRight size={25}/> </Link>
              </div>
              <div className='relative'>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation={true}
                  
                  loop={true}
                  modules={[Navigation]}
                
                >
                  {banner.map((item) => (
                    <SwiperSlide key={item.id}>
                      <img src={item.image} alt={item.title} loading='lazy' />
                      <div className='absolute w-full h-full top-3/12 left-16'>
                        <h2 className='sm:text-3xl font-dm-snas  tracking-wide mb-2 text-dark font-bold'>{item.heading}</h2>
                        <h3 className='sm:text-2xl font-dm-snas font-bold tracking-wide mb-2 text-dark'>{item.subheading}</h3>
                        <p className='sm:text-2xl font-dm-snas font-bold tracking-wide mb-4 text-dark '>{item.offer}</p>
                        <button className=' text-light py-2 px-4 rounded-md bg-dark hover:opacity-85 transition-all duration-300 cursor-pointer '>{item.button}</button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div></div>
            </div>
            <div className='col-span-2'>
              <div></div>
              <div></div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default NewArrivals;
