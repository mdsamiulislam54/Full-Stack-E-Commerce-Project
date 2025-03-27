
import BannerSection from "../BannerSection/BannerSection";
import BigOffers from "../BigOffers/BigOffers.jsx";
import CategoryGallary from "../Catagory/CategoryGallary.jsx";
import NewArrivals from "../NewArrivals/NewArrivals.jsx";
// import Pro from "../Pro.jsx";
// import Products from "../Products/Products.jsx";

import ShopCart from "../ShopCart/ShopCart.jsx";

// import Products from "../Products/Products";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Products from "../Products/Products.jsx";
import Testimonial from "../Testimonial/Testimonial.jsx";
import Brand from "../Brand/Brand.jsx";
import Loader from "../Loader/Loader.jsx";

const Home = () => {
  return (
    <>
    {/* <Loader/> */}
      <BannerSection />
      <WhyChooseUs />
      <CategoryGallary/>
      <Products/>
      <ShopCart/>
      <NewArrivals/>
    
      {/* <Pro/> */}
      <BigOffers/>
      <Testimonial/>
      <Brand/>
    
      
    </>
  );
};

export default Home;
