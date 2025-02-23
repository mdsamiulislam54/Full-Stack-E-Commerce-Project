import { Link } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import PropTypes from 'prop-types';

Link;
const NavBar = () => {
  const [show, setShow] = useState(false);
  const [showShop, setShowShop] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  const handleShop = () => {
    setShowShop(!showShop);
  }
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
    "Sunglasses Cases",
    "Jewellery Sets",
    "Earrings",
    "Rings",
    "Necklaces",
    "Pendants",
    "Bracelets",
    "Bangles",
    "Anklets",
    "Mangalsutras",
    "Chains",
    "Toe Rings",
    "Jewellery Boxes",
    "Jewellery Accessories",
    "Brooches",
    "Cufflinks",
    "Tiepins",
    "Pocket Squares",
    "Handkerchiefs",
    "Belts",
    "Socks",
    "Caps & Hats",
    "Mufflers",
    "Scarves",
    "Gloves",
    "Phone Cases",
    "Travel Accessories",

  ];
  return (
    <div className="">
      <div className="sm:flex justify-between max-sm:justify-center items-center py-4 ">
        <ul className="sm:flex space-x-10  ">
          <li>
            <Link onClick={handleShow} className="flex items-center gap-2 lg:text-lg font-medium">
              All Category{" "}
              <span>
                <BiChevronDown className={`${show ? "rotate-180":""} transition-all duration-300 ease-in-out`} />
              </span>{" "}
            </Link>
            {show && (
              <div className="absolute   w-full left-0 p-3 shadow-lg transform translate-y-2 mt-6 py-7 rounded-md bg-primary text-light border-l-3 border-secondary ">
                <ul className="grid grid-cols-4 gap-4 ">
                  {dropDownMenuItem.map((item, index) => (
                    <li
                    
                      key={index}
                      className="hover:text-secondary cursor-pointer transition-all duration-300 ease-in-out"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link className="flex items-center gap-2">All Products</Link>
          </li>
          <li>
            <Link className="flex items-center gap-2">Offer Today</Link>
          </li>
          <li onClick={handleShop} className="">
            <Link className="flex items-center gap-2" >Shop<span><BiChevronDown  className={`${showShop ? "rotate-180":""} transition-all duration-300 ease-in-out`}/></span></Link>
            {showShop && (
              <div className="absolute left-0  w-full mx-auto p-3 shadow-lg transform translate-y-2 mt-6 py-7 rounded-md bg-primary text-light border-l-3 border-secondary ">
                <ul className="grid grid-cols-6 gap-4 ">
                  {shopDropDownMenuItem.map((item, index) => (
                    <li
                      
                      key={index}
                      className="hover:text-secondary cursor-pointer transition-all duration-300 ease-in-out"
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
          <ul className="flex space-x-10">
            <li>
              <Link className="flex items-center gap-2">
                <span>
                  <FaUserCheck />
                </span>
                Login
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2">
                <TiShoppingCart />
                <span>0</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
NavBar.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default NavBar;

