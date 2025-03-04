import { useEffect, useState } from "react";
import LogoSearch from "./LogoSearch";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import { CgMenuRightAlt } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
import MobilNavbar from "./MobilNavbar";
import BandLogo from "./BandLogo";
import ShopCart from "../ShopCart/ShopCart";


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
        <div className="max-sm:block hidden   py-4">
        

          <div className="  justify-between items-center px-4">
            <div className="flex sm:gap-4 gap-2 items-center justify-between">
            <div onClick={handleShow} className="text-2xl cursor-pointer flex">
              {isshow ? <VscClose size={40} /> : <CgMenuRightAlt size={40} />}
              <div className="mx-3"><BandLogo/></div>
            </div>
           
             <div><ShopCart/></div>
            </div>
           
          </div>
        
          
          <div
            className={`max-sm:block hidden absolute top-16 left-0 w-10/12 shadow-2xl z-[100] bg-white transition-all duration-300 ease-in-out ${
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
