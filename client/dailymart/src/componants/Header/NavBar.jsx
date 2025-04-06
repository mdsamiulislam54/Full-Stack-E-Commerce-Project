import { Link } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import Login from "../Registration/Login";
import { VscClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import {
  openLoginModal,
  closeLoginModal,
} from "../../redux/features/loginSlice";

const NavBar = () => {
  const [showShop, setShowShop] = useState(false);
  const isModalOpenHandelar = useSelector(
    (state) => state.login.isLoginModalOpen
  );

  const dispatch = useDispatch();

  const openModalHandelar = () => {
    dispatch(openLoginModal());
  };
  const closeModalhandelar = () => {
    dispatch(closeLoginModal());
  };

  const handleShopEnter = () => {
    setShowShop(true);
  };

  const handleShopLeave = () => {
    setShowShop(false);
  };

  const shopDropDownMenuItem = [
    "Men's Fashion",
    "Women's Fashion",
    "Kid's Fashion",
    "Cell phones",
    "Footwear",
    "Watches",
    "T-Shirt",
    "Food",
    "headphones",
  ];
  const profileImages = localStorage.getItem("profileImages");
  return (
    <div className="  sm:bg-primary sm:text-light sm:py-2  ">
      <div className="flex  justify-between  items-center py-1 w-11/12 mx-auto">
        <ul className="flex space-x-10   max-sm:flex-col max-sm:gap-2  ">
          <li>
            <Link
              to={"/"}
              className="flex items-center gap-2 text-lg  relative "
            >
              Home
            </Link>
          </li>
          <li
            onMouseEnter={handleShopEnter}
            onMouseLeave={handleShopLeave}
            className=""
          >
            <Link className="flex items-center gap-2 text-lg  ">
              Shop
              <span>
                <BiChevronDown
                  className={`${
                    showShop ? "rotate-180" : ""
                  } transition-all duration-300 ease-in-out`}
                />
              </span>
            </Link>
            {showShop && (
              <div
                className="sm:absolute   left-1 sm:left-28 p-3  transform -translate-y-4  sm:mt-4 mt-2 sm:p-4   sm:py-7 rounded-md sm:bg-primary text-light sm:border-l-3 sm:border-primary
                transition-all duration-700
                w-7/12 "
                onMouseEnter={handleShopEnter}
                onMouseLeave={handleShopLeave}
              >
                <ul className="grid sm:grid-cols-3 grid-cols-1  gap-4 ">
                  {shopDropDownMenuItem.map((item, index) => (
                    <li
                      key={index}
                      className="hover:text-secondary hover:ml-2  cursor-pointer transition-all duration-300 ease-in-out max-sm:text-sm flex justify-between"
                    >
                      <span className="">{item} </span>
                      <span className="">
                        <MdKeyboardArrowRight size={25} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link
              to={"/allproducts"}
              className="flex items-center text-lg   gap-2"
            >
              Products
            </Link>
          </li>
          <li>
            <Link className="flex items-center text-lg   gap-2">Blog</Link>
          </li>
          <li>
            <Link className="flex items-centertext-lg   gap-2">Offer</Link>
          </li>
          <li>
            <Link className="flex items-center lg:text-lg    gap-2">
              New arrivals
            </Link>
          </li>
          <li>
            <Link className="flex items-center text-lg    gap-2">
              Todays deal
            </Link>
          </li>
          <li>
            <Link className="flex items-center text-lg    gap-2">
              Gift cards
            </Link>
          </li>
        </ul>
        <div>
          <ul className="flex sm:space-x-10 space-x-4  justify-between items-center sm:mb-0 mb-5">
            <li>
              <Link
                onClick={openModalHandelar}
                className="flex items-center text-lg  gap-2"
              >
               {
                profileImages? (
                  <img
                    className="rounded-full h-7 w-7 object-cover"
                    src={profileImages}
                    alt="profile image"
                  />
                ) : (
                  <FaUserCheck size={24} className="text-primary" />
                )
               }
                Login
              </Link>
            </li>
          </ul>
        </div>
        <Modal
          isOpen={isModalOpenHandelar}
          onRequestClose={closeModalhandelar}
          contentLabel="Registration Form"
          className="bg-gray-600  shadow-2xl p-6 rounded-lg opacity-100   max-w-md mx-auto my-20"
          overlayClassName="fixed inset-0 bg-gray-800 opacity-95  flex justify-center items-center z-100"
        >
          <button
            onClick={closeModalhandelar}
            className=" bg-light p-1 text-primary rounded-full hover:opacity-85 cursor-pointer "
          >
            <VscClose
              size={30}
              className="hover:scale-50 duration-300 transition-all animate-pulse"
            />
          </button>
          <h2 className="text-2xl mb-4 text-center text-light font-bold">
            Login
          </h2>
          <Login />
        </Modal>
      </div>
    </div>
  );
};
NavBar.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default NavBar;
