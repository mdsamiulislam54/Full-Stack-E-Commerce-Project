import img1 from "../../assets/bigOffer-1.jpg";
import img2 from "../../assets/bigOffer-2.jpg";

const BigOffers = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-0">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="relative overflow-hidden">
            <img className=" object-contain hover:scale-125 transition-all duration-500 cursor-pointer" src={img1} alt="big offer 1" />
            <div className="absolute top-10 left-10 text-light">
              <h4 className="text-xl font-medium tracking-wider border-l-2 pl-2 sm:mb-10 mb-4">Spring 2025 <br></br>For Man</h4>
              <h5 className="text-5xl font-dm-snas tracking-wider font-bold sm:mb-10 mb-4">Classics <br></br> And Modern</h5>
              <button className="border px-10 py-4 text-xl font-medium cursor-pointer rounded hover:border-secondary transition-all duration-500">Shop Now</button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <img className=" object-contain hover:scale-125 transition-all duration-500 cursor-pointer" src={img2} alt="big offer 1" loading="lazy"  />
            <div className="absolute top-10 left-10 text-light">
              <h4 className="text-xl font-medium tracking-wider border-l-2 pl-2 sm:mb-10 mb-4">Spring 2025 <br></br> For Man</h4>
              <h5 className="text-5xl font-dm-snas tracking-wider font-bold sm:mb-10 mb-4 mb-10">Classics <br></br>And Modern</h5>
              <button className="border px-10 py-4 text-xl font-medium cursor-pointer rounded hover:border-secondary transition-all duration-500">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigOffers;
