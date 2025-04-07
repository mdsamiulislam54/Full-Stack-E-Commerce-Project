import { IoIosSearch } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../redux/features/filteredProducts";
import BrendLogo from "../../assets/brand-logo.png";
import { useNavigate } from "react-router-dom";
import { BsBookmarkHeart } from "react-icons/bs";

const LogoSearch = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {whishlist} = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchValue = e.target.search.value;
    dispatch(setSearchTerm(searchValue));
    console.log(searchValue);
    navigate("/allproducts");
  };
  const handelWishlist = () => {
    navigate("/wishlists");
  };

  return (
    <div className=" sm:bg-light ">
      <div className="sm:flex justify-between items-center sm:py-0 py-4 w-11/12 mx-auto ">
        <div className="max-sm:hidden">
          <img src={BrendLogo} alt="" />
        </div>
        <div className="sm:w-4/12 w-full flex relative gap-4 items-center ">
          <form onSubmit={handleSubmit} className=" w-full flex relative">
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="border-2 w-full  border-gray-300 sm:p-2 p-1 rounded-lg outline-none "
            />
            <button
              type="submit"
              className=" absolute top-0 right-0 h-full px-4 bg-primary hover:bg-secondary transition-all duration-500 cursor-pointer text-light text-xl p-1 rounded-r-lg"
            >
              <IoIosSearch />
            </button>
          </form>
          <div className="">
            <span onClick={handelWishlist} className="relative"><BsBookmarkHeart size={30} className="text-primary" />
            <span className="absolute -top-2 -right-4 bg-secondary  rounded-full px-2">{whishlist.length}</span>
            </span>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
