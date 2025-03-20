// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/autoplay';

// Import required modules
import {  Autoplay ,FreeMode} from 'swiper/modules';

const Brand = () => {
  return (
    <div className='my-20'>
      <div className='w-11/12 mx-auto'>
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          freeMode={true}
          loop={true}
          speed={2000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
         
          modules={[ Autoplay,FreeMode]}
          className="mySwiper"
        >
          {[
            "https://brandlogos.net/wp-content/uploads/2025/03/kaspersky_lab-logo_brandlogos.net_yywlj-512x512.png",
            "https://brandlogos.net/wp-content/uploads/2025/03/lexar-logo_brandlogos.net_cxrsa-512x512.png",
            "https://brandlogos.net/wp-content/uploads/2025/03/rakuten_mobile-logo_brandlogos.net_hddew-512x512.png",
            "https://brandlogos.net/wp-content/uploads/2025/03/ocn-logo_brandlogos.net_ep2pi-512x225.png",
            "https://brandlogos.net/wp-content/uploads/2025/03/google_admob-logo_brandlogos.net_hhvjv-512x512.png",
            "https://brandlogos.net/wp-content/uploads/2025/03/gitlab-logo_brandlogos.net_pi9fx-512x512.png",
            "https://brandlogos.net/wp-content/uploads/2025/03/trustpilot-logo_brandlogos.net_msnwt-512x512.png",
            "https://brandlogos.net/wp-content/uploads/2025/03/android_tv-logo_brandlogos.net_ayhcy-512x512.png",
            "https://brandlogos.net/wp-content/uploads/2025/03/microchip_technology-logo_brandlogos.net_xfjwu-512x270.png",
            "https://brandlogos.net/wp-content/uploads/2025/03/banco_bradesco-logo_brandlogos.net_qjt3k-512x512.png",
            "https://brandlogos.net/wp-content/uploads/2025/03/taylor_morrison-logo_brandlogos.net_fbuc8-512x512.png",
            "https://brandlogos.net/wp-content/uploads/2025/03/shopee_food_indonesia-logo_brandlogos.net_pnuqy-512x187.png",
            "https://brandlogos.net/wp-content/uploads/2025/03/chint_group-logo_brandlogos.net_utwl0-512x174.png"
          ].map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img src={logo} alt="brand logo" className="h-24 w-24 object-contain"  loading='lazy'/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Brand;
