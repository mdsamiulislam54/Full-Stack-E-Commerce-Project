import { Link } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa6";

import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import Login from "../Registration/Login";
import { VscClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal,closeLoginModal } from "../../redux/features/loginSlice";
import ShopCart from "../ShopCart/ShopCart";


const NavBar = () => {
  const [show, setShow] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const isModalOpenHandelar = useSelector((state)=> state.login.isLoginModalOpen)


  const dispatch = useDispatch();

  const openModalHandelar = () => {
    dispatch(openLoginModal());
  };
  const closeModalhandelar = () => {
    dispatch(closeLoginModal());
  };

  const handleShow = () => {
    setShow(!show);
    setShowShop(false)
  };
  const handleShop = () => {
    setShowShop(!showShop);
    setShow(false)
  };
  const dropDownMenuItem = [
    "Electronics & Gadgets",
    "Fashion & Apparel",
    "Home & Kitchen",
    "Groceries & Essentials",
    "Books & Stationery",
    "Toys & Baby Products",
    "Automotive & Accessories",
    "Sports & Outdoors",
    "Health & Wellness",
    "Beauty & Personal Care",
  ];

  const shopDropDownMenuItem = [
    "Men's Fashion",
    "Women's Fashion",
    "Kid's Fashion",
    "Footwear",
    "Watches",
    "Jewellery",
    "Bags & Luggage",
    "Sunglasses & Frames",
    "Beauty & Grooming",
    "Accessories",
    "Sportswear",
    "Innerwear & Sleepwear",
    "Winterwear",
    "Eyewear",
    "Maternity Wear",
    "Plus Size",
    "Premium Brands",
    "Handbags",
    "Wallets",
    "Luggage & Trolleys",
    "Travel Accessories",
    "Backpacks",
    "Messenger Bags",
    "School Bags",
    "Laptop Bags",
    "Duffle Bags",
    "Trekking Bags",
    "Rucksacks",
    "Travel Bags",
    "Sports Shoes",
    "Casual Shoes",
    "Formal Shoes",
    "Sneakers",
    "Sandals & Floaters",
    "Flip Flops",
    "Loafers",
    "Boots",
    "Running Shoes",
    "Training & Gym Shoes",
    "Football Shoes",
    "Cricket Shoes",
    "Badminton Shoes",
    "Tennis Shoes",
    "Basketball Shoes",
    "Slippers & Flip Flops",
    "Shoe Care & Accessories",
    "Sunglasses",
    "Eyeglasses",
    "Contact Lenses",
    "Frames",
    "Spectacle Cases",
    "Eyewear Accessories",
  
   
  ];
  return (
    <div className="  sm:bg-primary sm:text-light sm:px-0 ">
      <div className="flex  justify-between  items-center py-2 sm:max-w-screen-xl mx-auto">
        <ul className="flex space-x-10   max-sm:flex-col max-sm:gap-2  ">
          <li>
            <Link
              onClick={handleShow}
              className="flex items-center gap-2 text-lg  "
            >
            Category
              <span>
                <BiChevronDown
                  className={`${
                    show ? "rotate-180" : ""
                  } transition-all duration-300 ease-in-out`}
                />
              </span>{" "}
            </Link>
            {show && (
              <div className="absolute   left-1 sm:left-28 p-3 shadow-lg transform -translate-y-4  mt-6 py-7 rounded-md bg-white text-dark border-l-3 border-primary ">
                <ul className="grid sm:grid-cols-4 grid-cols-2 gap-4 ">
                  {dropDownMenuItem.map((item, index) => (
                    <li
                      key={index}
                      className="hover:text-secondary cursor-pointer transition-all duration-300 ease-in-out max-sm:text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li onClick={handleShop} className="">
            <Link className="flex items-center gap-2 text-lg ">
              All products
              <span>
                <BiChevronDown
                  className={`${
                    showShop ? "rotate-180" : ""
                  } transition-all duration-300 ease-in-out`}
                />
              </span>
            </Link>
            {showShop && (
              <div className="absolute left-0 sm:left-28   mx-auto p-3 shadow-lg transform -translate-y-4 mt-6 py-7 rounded-md bg-white  text-dark border-l-3 border-primary ">
                <ul className="grid sm:grid-cols-6 grid-cols-3 gap-4 ">
                  {shopDropDownMenuItem.map((item, index) => (
                    <li
                      key={index}
                      className="hover:text-secondary cursor-pointer transition-all duration-300 ease-in-out lg:text-lg text-sm "
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link className="flex items-center text-lg   gap-2">
              Blog
            </Link>
          </li>
          <li>
            <Link className="flex items-centertext-lg   gap-2">
              Offer 
            </Link>
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
                <span>
                  <FaUserCheck />
                </span>
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
            className=" bg-secondary p-1 text-white rounded-full hover:opacity-85 cursor-pointer "
          >
            <VscClose
              size={30}
              className="hover:scale-50 duration-300 transition-all animate-pulse"
            />
          </button>
          <h2 className="text-2xl mb-4 text-center text-light font-bold">Login</h2>
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
