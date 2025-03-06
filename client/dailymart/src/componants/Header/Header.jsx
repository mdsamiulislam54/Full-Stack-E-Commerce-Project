import { useEffect, useState } from "react";
import LogoSearch from "./LogoSearch";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import { CgMenuRightAlt } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
import MobilNavbar from "./MobilNavbar";
import BandLogo from "./BandLogo";

import { IoIosSearch } from "react-icons/io";


const Header = () => {
  const [windowY, setWindowY] = useState(0);
  const [isshow, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      setWindowY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShow = () => {
    setShow(!isshow);
  };

  return (
    <header className="bg-assent z-100" style={{ willChange: "transform" }}>
      <div className="mx-auto max-sm:sm:py-4 py-0">
        <nav className="max-sm:hidden">
          {/* TopBar - Hide on Scroll */}
          <div
            className={`transition-transform duration-300 ease-in-out ${
              windowY > 0
                ? "absolute h-0 overflow-hidden -translate-y-full z-30  "
                : "relative translate-y-0 z-30"
            }`}
          >
            <TopBar />
          </div>

          {/* LogoSearch & NavBar - Sticky */}
          <div className="  bg-white shadow-md">
          <LogoSearch />
            <NavBar />
          </div>
        </nav>

        {/* Mobile View */}
        <div className="max-sm:block hidden bg-primary text-light shadow-md p-4">
        

          <div className="flex  justify-between items-center gap-2 ">
            <div className="flex gap-3 items-center">
              <div onClick={handleShow}>
                {isshow ?<VscClose/>: <CgMenuRightAlt size={20} className="hover:cursor-pointer"/>}
              </div>
              <div>
                <BandLogo />
              </div>
            </div>
            <div className="relative  ">
              <input type="text" name="" id="" placeholder="Sarch products..." className="border-1 border-gray-400 outline-none p-1 rounded-2xl w-full sm:w-2/3 md:w-1/2"/>
              <span className=" ">
                <button className=" absolute top-0 right-0 text-center bg-assent text-dark hover:bg-secondary transition-colors duration-300 px-2  h-full rounded-r-2xl"><IoIosSearch/></button>
              </span>
            </div>
           
          </div>
        
          
          <div
            className={`max-sm:block hidden absolute top-16 left-0 w-10/12 shadow-2xl z-[100] bg-primary transition-all duration-300 ease-in-out ${
              isshow ? "h-screen" : "h-0 overflow-hidden"
            }`}
          >
          
            {isshow && <MobilNavbar />}
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
