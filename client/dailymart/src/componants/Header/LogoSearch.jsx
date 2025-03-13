import { IoIosSearch } from "react-icons/io";
import BandLogo from './BandLogo'

const LogoSearch = () => {
  return (
    <div className=" sm:bg-light ">
      <div className="sm:flex justify-between items-center sm:py-4 py-1 w-11/12 mx-auto">
        <div className="max-sm:hidden">
        
          
            <BandLogo/>
         
        </div>
        <div className="sm:w-4/12 w-full flex relative  ">
          <input
            type="text"
            placeholder="Search"
            className="border-2 w-full  border-gray-300 sm:p-2 p-1 rounded-lg outline-none "
          />
          <button className=" absolute top-0 right-0 h-full px-4 bg-primary hover:bg-secondary transition-all duration-500 cursor-pointer text-light text-xl p-1 rounded-r-lg">
            <IoIosSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
