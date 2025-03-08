import BannerSection from "../BannerSection/BannerSection";
import CategoryGallary from "../Catagory/CategoryGallary.jsx";
import NewArrivals from "../NewArrivals/NewArrivals.jsx";
// import Pro from "../Pro.jsx";
import Products from "../Products/Products.jsx";

import ShopCart from "../ShopCart/ShopCart.jsx";

// import Products from "../Products/Products";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <BannerSection />
      <WhyChooseUs />
      <CategoryGallary/>
      <ShopCart/>
      <NewArrivals/>
      <Products/>
      {/* <Pro/> */}
    
      
    </>
  );
};

export default Home;
