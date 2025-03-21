import img1 from "../../assets/bigOffer-1.webp";
import img2 from "../../assets/bigOffer-2.webp";


const BigOffers = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto px-4 sm:px-0">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="relative overflow-hidden">
            <picture>
              <source srcSet={img1} type="image/webp" />
              <img className=" w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                src={img1}
                alt="big offer 1"
                loading="eager"
                width="600"
                height="400"
              />
            </picture>
            <div className="absolute top-10 left-10 text-light">
              <h4 className="text-xl font-medium tracking-wider border-l-2 pl-2 sm:mb-10 mb-4">Spring 2025 <br />For Man</h4>
              <h5 className="text-5xl font-dm-snas tracking-wider font-bold sm:mb-10 mb-4">Classics <br /> And Modern</h5>
              <button className="border px-10 py-4 text-xl font-medium cursor-pointer rounded hover:border-secondary transition-all duration-500">Shop Now</button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <picture>
              <source srcSet={img2} type="image/webp" />
              <img className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                src={img2}
                alt="big offer 2"
                loading="eager"
                width="600"
                height="400"
              />
            </picture>
            <div className="absolute top-10 left-10 text-light">
              <h4 className="text-xl font-medium tracking-wider border-l-2 pl-2 sm:mb-10 mb-4">Spring 2025 <br /> For Man</h4>
              <h5 className="text-5xl font-dm-snas tracking-wider font-bold sm:mb-10  mb-10">Classics <br />And Modern</h5>
              <button className="border px-10 py-4 text-xl font-medium cursor-pointer rounded hover:border-secondary transition-all duration-500">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigOffers;

