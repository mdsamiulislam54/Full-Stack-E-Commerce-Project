import { Link } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import Login from "../Registration/Login";
import { VscClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal,closeLoginModal } from "../../redux/features/loginSlice";


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
    <div className="  bg-primary text-light sm:px-0 px-4">
      <div className="flex  justify-between  items-center py-2 sm:max-w-screen-xl mx-auto">
        <ul className="flex sm:space-x-10  sm:gap-4 gap-2 ">
          <li>
            <Link
              onClick={handleShow}
              className="flex items-center gap-2 lg:text-lg text-[14px] font-medium"
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
          <li>
            <Link className="flex items-center lg:text-lg text-[14px]  gap-2">
              Products
            </Link>
          </li>
          <li>
            <Link className="flex items-center lg:text-lg text-[14px]  gap-2">
              Offer 
            </Link>
          </li>
          <li onClick={handleShop} className="">
            <Link className="flex items-center gap-2 lg:text-lg text-[14px]">
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
        </ul>
        <div>
          <ul className="flex sm:space-x-10 space-x-4  justify-between items-center sm:mb-0 sm:mb-5">
            <li>
              <Link
                onClick={openModalHandelar}
                className="flex items-center text-md max-sm:text-[14px] gap-2"
              >
                <span>
                  <FaUserCheck />
                </span>
                Login
              </Link>
            </li>
            <li>
              <Link className="flex items-center text-md max-sm:text-[14px] gap-2 relative ">
                <TiShoppingCart size={25}  className="relative"/>
                <span className=" absolute -right-2 -top-1 font-bold text-secondary">0</span>
              </Link>
            </li>
          </ul>
        </div>
        <Modal
          isOpen={isModalOpenHandelar}
          onRequestClose={closeModalhandelar}
          contentLabel="Registration Form"
          className="bg-gradient-to-r from-light to-assent  p-6 rounded-lg opacity-100 p-6 rounded-lg shadow-lg max-w-md mx-auto my-20"
          overlayClassName="fixed inset-0 bg-gradient-to-r from-secondary to-primary opacity-95  flex justify-center items-center z-100"
        >
          <button
            onClick={closeModalhandelar}
            className=" bg-primary p-1 text-white rounded-full hover:opacity-85 cursor-pointer "
          >
            <VscClose
              size={30}
              className="hover:scale-50 duration-300 transition-all animate-pulse"
            />
          </button>
          <h2 className="text-2xl mb-4 text-center font-bold">Login</h2>
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
