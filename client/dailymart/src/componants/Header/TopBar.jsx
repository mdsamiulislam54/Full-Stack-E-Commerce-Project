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
    <div className="sm:bg-light  ">
      <div className="sm:flex justify-between items-center max-sm:flex-col gap-5 max-sm:item-start sm:px-0  w-11/12 mx-auto py-2 ">
        <p className=" font-normal  text-lg sm:block hidden">
          24/7 customer service <strong>+880-01612086842</strong>
        </p>
        <ul className="sm:flex sm:space-x-10 items-center gap-4">
          <li>
            <Link to={'/'} className="flex items-center gap-2 mb-1 sm:mb-0  sm:text-lg  font-normal sm:tracking-wider hover:text-secondary transition-all duration-500 ease-in-out ">
              <span>
                <FaHome size={18}></FaHome>
              </span>
              HOME
            </Link>
          </li>
          <li>
            <Link to={'/userDashboard'} className="flex items-center gap-2 mb-1 sm:mb-0   sm:text-lg font-normal tracking-wider hover:text-secondary  transition-all duration-500 ease-in-out">
              <span>
                <MdManageAccounts size={18} />
              </span>
              ACCOUNT
            </Link>
          </li>
          <li>
            <Link
              onClick={openModalHandelar}
              className="flex items-center gap-2 mb-1 sm:mb-0  sm:text-lg font-normal tracking-wider hover:text-secondary transition-all duration-500 ease-in-out"
            >
              <span>
                <IoLogIn size={18} />
              </span>
              REGISTER
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2   sm:text-md sm:text-lg font-normal tracking-wider hover:text-secondary transition-all duration-500 ease-in-out">
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
      className="bg-gray-600  shadow-2xl p-6 rounded-lg opacity-100   max-w-md mx-auto my-20"
          overlayClassName="fixed inset-0 bg-gray-800 opacity-95  flex justify-center items-center z-100"
      >
       <div className="flex justify-between items-center">
       <button
          onClick={closeModalhandelar}
          className=" bg-light p-1 text-primary rounded-full hover:opacity-85 cursor-pointer  "
        >
          <VscClose
            size={30}
            className="hover:scale-50 duration-300 transition-all animate-pulse"
          />
          
        </button>
        
       </div>
       
        <h2
          
          className="text-2xl mb-4 text-center font-bold text-light"
        >
          Register
        </h2>
        <Registration />
      </Modal>
    </div>
  );
};

export default TopBar;
