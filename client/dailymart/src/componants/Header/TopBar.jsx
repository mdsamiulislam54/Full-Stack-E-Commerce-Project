import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";

import Modal from "react-modal";
import Registration from "../Registration/Registration";
import { VscClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";

import { openRegisterModal,closeRgistermodal } from "../../redux/features/registerSlice";

const TopBar = () => {

  const isModalOpenHandelarRgister = useSelector((state)=> state.register.isRegistretionmodalOpen)

  

  const dispatch = useDispatch();

  const openModalHandelar = () => {
    dispatch(openRegisterModal());
  };
  const closeModalhandelar = () => {
    dispatch(closeRgistermodal());
  };

  return (
    <div>
      <div className="flex justify-between items-center max-sm:flex-col gap-5 max-sm:item-start sm:px-0 px-4">
        <p className=" font-normal  lg:text-md text-sm ">
          24/7 customer service +880-01612086842
        </p>
        <ul className="flex space-x-10 items-center  max-sm:grid max-sm:grid-cols-2 max-sm:grid-rows-3 gap-4">
          <li>
            <Link className="flex items-center gap-2 lg:text-md text-sm  font-normal tracking-wider hover:text-secondary transition-all duration-500 ease-in-out">
              <span>
                <FaHome size={18}></FaHome>
              </span>
              HOME
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 lg:text-md text-sm font-normal tracking-wider hover:text-secondary  transition-all duration-500 ease-in-out">
              <span>
                <MdManageAccounts size={18} />
              </span>
              MY ACCOUNT
            </Link>
          </li>
          <li>
            <Link
              onClick={openModalHandelar}
              className="flex items-center gap-2 lg:text-md text-sm font-normal tracking-wider hover:text-secondary transition-all duration-500 ease-in-out"
            >
              <span>
                <IoLogIn size={18} />
              </span>
              REGISTER
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 lg:text-md text-sm font-normal tracking-wider hover:text-secondary transition-all duration-500 ease-in-out">
              <span>
                <RiContactsFill size={18} />
              </span>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      {/* React Modal */}
      <Modal
        isOpen={isModalOpenHandelarRgister}
        onRequestClose={closeModalhandelar}
        contentLabel="Registration Form"
        className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto my-20"
        overlayClassName="fixed inset-0 bg-white opacity-90 flex justify-center items-center z-100"
      >
        <button
          onClick={closeModalhandelar}
          className=" bg-primary p-1 text-white rounded-full hover:opacity-85 cursor-pointer "
        >
          <VscClose
            size={30}
            className="hover:scale-50 duration-300 transition-all"
          />
        </button>
        <h2
          onClick={closeModalhandelar}
          className="text-2xl mb-4 text-center font-bold"
        >
          Register
        </h2>
        <Registration />
      </Modal>
    </div>
  );
};

export default TopBar;
