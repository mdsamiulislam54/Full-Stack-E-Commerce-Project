
import { IoIosSearch } from "react-icons/io";

const LogoSearch = () => {
  return (
    <div>
      <div className="sm:flex justify-between items-center py-4">
        <div>
          <h1 className="sm:text-2xl text-sm font-bold tracking-wider max-sm:hidden "><span className="text-light bg-primary px-2 rounded-sm font-bold">D</span>aily Mart</h1>
          <p className="text-sm tracking-wider max-sm:hidden ">Buy your daily essentials here</p>
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
