import { useEffect, useRef, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { setActiveComponent } from "../../redux/features/UiComponatsSlice";
import { useDispatch } from "react-redux";
useDispatch;
const UserProfile = ({ user, handleLogout }) => {
  const input = useRef(null);
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

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
    <div className="bg-gray-100 px-2 sm:border-b-0 border-b-2 border-primary h-screen relative">
      <div>
        <div className="relative flex justify-center items-center object-contain mb-4">
          <img className="w-30 h-30 rounded-full" src={image} alt="" />
          <input
            onChange={handleUploadImages}
            ref={input}
            type="file"
            className="hidden"
          />
          <button
            onClick={handleClick}
            title="Change profile picture"
            className="absolute sm:bottom-2 sm:right-20 bottom-4 right-24   text-center rounded-full  cursor-pointer "
          >
            <FaUserEdit
              size={15}
              color="red"
              className="hover:text-primary duration-300 transition-all"
            />
          </button>
        </div>
        <h2 className="text-center sm:text-lg font-semibold tracking-tighter flex items-center justify-center gap-1">
          <span>{user?.name}</span>{" "}
          <span>
            <VscVerifiedFilled color="green" size={25} />
          </span>
        </h2>
        <p className="text-center text-sm font-normal tracking-tighter">
          {user?.email}
        </p>
      </div>

      <div className="border-t my-4 border-gray-400 ">
        <nav >
          <ul className="flex flex-col gap-2 ">
            <li className="text-center ">
              <Link
                onClick={() => dispatch(setActiveComponent("profile"))}
                href="#"
                className="text-lg font-medium hover:text-secondary transition-all duration-300 flex items-center justify-between gap-5 hover:ml-4 p-1  "
              >
                <span className="text-sm my-2"> Profile Overview</span>{" "}
                <span>
                  <IoIosArrowRoundForward size={20} />
                </span>
              </Link>
            </li>
            <li className="text-center ">
              <Link
                onClick={() => dispatch(setActiveComponent("orders"))}
                href="#"
                className="text-lg font-medium hover:text-secondary transition-all duration-300  flex items-center justify-between gap-5 hover:ml-4 p-1  "
              >
                <span className="text-sm ml-4"> My Orders</span>{" "}
                <span>
                  <IoIosArrowRoundForward size={20} />
                </span>
              </Link>
            </li>

            <li className="text-center  ">
              <Link
                onClick={() => dispatch(setActiveComponent("whishlist"))}
                href="#"
                className="text-lg font-medium hover:text-secondary transition-all duration-300  flex items-center justify-between gap-5 hover:ml-4 p-1  "
              >
                <span className="text-sm ml-4"> My Wishlist</span>{" "}
                <span>
                  <IoIosArrowRoundForward size={20} />
                </span>
              </Link>
            </li>

            <li className="text-center  ">
              <Link
                onClick={() => dispatch(setActiveComponent("cart"))}
                href="#"
                className="text-lg font-medium hover:text-secondary transition-all duration-300  flex items-center justify-between gap-5 hover:ml-4 p-1 "
              >
                <span className="text-sm ml-4"> My Cart List</span>{" "}
                <span>
                  <IoIosArrowRoundForward size={20} />
                </span>
              </Link>
            </li>
            <li className="text-center ">
              <Link
                onClick={() => dispatch(setActiveComponent("Settings"))}
                href="#"
                className="text-lg font-medium hover:text-secondary transition-all duration-300  flex items-center justify-between gap-5 hover:ml-4 p-1   "
              >
                <span className="text-sm ml-4"> Settings</span>{" "}
                <span>
                  <IoIosArrowRoundForward size={20} />
                </span>
              </Link>
            </li>

            <button
              onClick={() => handleLogout()}
              className="text-sm  cursor-pointer hover:text-secondary  duration-300 transition-all w-full absolute bottom-0 left-0 bg-primary mb-1 text-white py-2 font-bold "
            >
              Logout
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UserProfile;
