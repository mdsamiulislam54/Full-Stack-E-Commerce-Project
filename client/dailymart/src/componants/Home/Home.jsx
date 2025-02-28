import BannerSection from "../BannerSection/BannerSection"
import NewArrivals from "../NewArrivals/NewArrivals"




const Home = () => {
  return (
    <>
    <BannerSection/>
   
    <div className="sm:max-w-screen-xl  mx-auto">
        
        <NewArrivals/>
        
     
    </div>
    </>
  )
}

export default Home