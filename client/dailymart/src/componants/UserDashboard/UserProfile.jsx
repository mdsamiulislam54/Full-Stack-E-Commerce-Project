import { useEffect, useRef, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { setActiveComponent } from "../../redux/features/UiComponatsSlice";
import { useDispatch } from "react-redux";
useDispatch
const UserProfile = ({ user }) => {
  const input = useRef(null);
  const [image, setImage] = useState("");
    const dispatch = useDispatch()


  const handleClick = () => {
    input.current.click();
  };
  const handleUploadImages = (e) => {
    const file = e.target.files[0];
    const render = new FileReader();
    render.onload = () => {
      const file = render.result;
      localStorage.setItem("profileImages", file);
      setImage(file);
    };
    if (file) {
      render.readAsDataURL(file);
    }
  };
  useEffect(() => {
    const profileImages = localStorage.getItem("profileImages");
    if (profileImages) {
      setImage(profileImages);
    } else {
      setImage("https://via.placeholder.com/150");
    }
  }, []);
  return (
    <div className="bg-gray-100 px-2 sm:border-b-0 border-b-2 border-gray-300 py-2 py-0">
      <div>
        <div className="relative flex justify-center items-center object-contain mb-4">
          <img className="w-50 h-50 rounded-full" src={image} alt="" />
          <input
            onChange={handleUploadImages}
            ref={input}
            type="file"
            className="hidden"
          />
          <button
            onClick={handleClick}
            title="Change profile picture"
            className="absolute sm:bottom-2 sm:right-10 bottom-0 right-28 bg-primary p-2 text-center rounded-full  cursor-pointer "
          >
            <FaUserEdit
              size={20}
              color="white"
              className="hover:text-primary duration-300 transition-all"
            />
          </button>
        </div>
        <h2 className="text-center sm:text-lg font-semibold tracking-tighter flex items-center justify-center gap-1">
          <span>{user.name}</span>{" "}
          <span>
            <VscVerifiedFilled color="green" size={25} />
          </span>
        </h2>
        <p className="text-center text-sm font-normal tracking-tighter">
          {user.email}
        </p>
      </div>

      <div className="border-t my-4 border-gray-400">
        <nav>
          <ul className="flex flex-col gap-2 ">
            <li className="text-center ">
              <Link
              onClick={()=>dispatch(setActiveComponent('profile'))}
                href="#"
                className="text-lg font-medium hover:text-secondary transition-all duration-300 flex items-center justify-between gap-5 hover:ml-4 p-1  "
              >
                 <span>  My Profile</span>{" "}
                <span>
                  <IoIosArrowRoundForward size={20} />
                </span>
              </Link>
            </li>
            <li className="text-center ">
              <Link
                onClick={()=>dispatch(setActiveComponent('orders'))}
                href="#"
                className="text-lg font-medium hover:text-secondary transition-all duration-300  flex items-center justify-between gap-5 hover:ml-4 p-1  "
              >
                <span> My Orders</span>{" "}
                <span>
                  <IoIosArrowRoundForward size={20} />
                </span>
              </Link>
            </li>
            <li className="text-center ">
              <Link
                onClick={()=>dispatch(setActiveComponent('address'))}
                href="#"
                className="text-lg font-medium hover:text-secondary transition-all duration-300  flex items-center justify-between gap-5 hover:ml-4 p-1  "
              >
                <span> My Addresses</span>{" "}
                <span>
                  <IoIosArrowRoundForward size={20} />
                </span>
              </Link>
            </li>
            <li className="text-center  ">
              <Link
              onClick={()=>dispatch(setActiveComponent('whishlist'))}
                href="#"
                className="text-lg font-medium hover:text-secondary transition-all duration-300  flex items-center justify-between gap-5 hover:ml-4 p-1  "
              >
                <span> My Wishlist</span>{" "}
                <span>
                  <IoIosArrowRoundForward size={20} />
                </span>
              </Link>
            </li>
         
            <li className="text-center  ">
              <Link
              onClick={()=>dispatch(setActiveComponent('cart'))}
                href="#"
                className="text-lg font-medium hover:text-secondary transition-all duration-300  flex items-center justify-between gap-5 hover:ml-4 p-1 "
              >
                <span> My Cart List</span>{" "}
                <span>
                  <IoIosArrowRoundForward size={20} />
                </span>
              </Link>
            </li>
            <li className="text-center ">
              <Link
              onClick={()=>dispatch(setActiveComponent('Settings'))}
                href="#"
                className="text-lg font-medium hover:text-secondary transition-all duration-300  flex items-center justify-between gap-5 hover:ml-4 p-1   "
              >
                <span> Settings</span>{" "}
                <span>
                  <IoIosArrowRoundForward size={20} />
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UserProfile;
