import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";

const TopBar = () => {
  return (
    <div>
      <div className="flex justify-between items-center max-sm:flex-col gap-5 max-sm:item-start">
        <p className="sm:text-md font-normal ">24/7 customer service +880-01612086842</p>
        <ul className="flex space-x-10 items-center  max-sm:grid max-sm:grid-cols-2 max-sm:grid-rows-3 gap-4">
          <li>
            <Link className="flex items-center gap-2 text-md font-normal tracking-wider hover:text-secondary transition-all duration-500 ease-in-out">
              <span>
                <FaHome size={18}></FaHome>
              </span>
              HOME
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 text-md font-normal tracking-wider hover:text-secondary  transition-all duration-500 ease-in-out">
              <span>
                <MdManageAccounts size={18} />
              </span>
              MY ACCOUNT
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 text-md font-normal tracking-wider hover:text-secondary transition-all duration-500 ease-in-out">
              <span>
                <IoLogIn size={18} />
              </span>
              REGISTER
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 text-md font-normal tracking-wider hover:text-secondary transition-all duration-500 ease-in-out">
              <span>
                <RiContactsFill size={18} />
              </span>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
