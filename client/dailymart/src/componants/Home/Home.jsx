import BannerSection from "../BannerSection/BannerSection";
import CategoryGallary from "../Catagory/CategoryGallary.jsx";
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
      <Products/>
    
      
    </>
  );
};

export default Home;
