import { IoIosSearch } from "react-icons/io";
import Logo from "../../assets/cargo-truck.png";
import { Link } from "react-router-dom";

const LogoSearch = () => {
  return (
    <div className=" bg-assent ">
      <div className="sm:flex justify-between items-center py-4 sm:max-w-screen-xl mx-auto">
        <div>
          <div className="flex gap-3 items-center">
            <Link><img src={Logo} alt="" /></Link>
            <h1 className="sm:text-3xl text-sm font-extrabold tracking-wider max-sm:hidden flex items-center text-primary  ">
              D<span className="bg-gradient-to-t from-primary to-secondary text-transparent bg-clip-text">A</span>IL<span className="bg-gradient-to-t from-primary to-secondary text-transparent bg-clip-text">Y</span>M<span className="bg-gradient-to-t from-primary to-secondary text-transparent bg-clip-text">A</span>RT
            </h1>
          </div>
          <p className="text-sm tracking-wider max-sm:hidden ">
            Buy your daily essentials here
          </p>
        </div>
        <div className="sm:w-4/12 w-full flex relative  ">
          <input
            type="text"
            placeholder="Search"
            className="border-2 w-full  border-gray-300 p-2 rounded-lg outline-none "
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
