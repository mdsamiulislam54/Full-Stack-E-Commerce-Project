
import BannerSection from "../BannerSection/BannerSection";
import BigOffers from "../BigOffers/BigOffers.jsx";
import CategoryGallary from "../Catagory/CategoryGallary.jsx";
import NewArrivals from "../NewArrivals/NewArrivals.jsx";
// import Pro from "../Pro.jsx";
// import Products from "../Products/Products.jsx";

// import BuyNow from "../BuyNow/BuyNow";

import ShopCart from "../ShopCart/ShopCart.jsx";

// import Products from "../Products/Products";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Products from "../Products/Products.jsx";
import Testimonial from "../Testimonial/Testimonial.jsx";
import Brand from "../Brand/Brand.jsx";



const Home = () => {

  return (
    <>
    
       <BannerSection />
      <WhyChooseUs />
      <CategoryGallary/>
      <Products/>
      <ShopCart/>
      <NewArrivals/>
    
  
      <BigOffers/>
      <Testimonial/>
      <Brand/> 
    {/* <BuyNow/> */}
      
    </>
  );
};

export default Home;
