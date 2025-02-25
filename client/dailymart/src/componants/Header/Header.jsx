import { useEffect, useState } from "react";
import LogoSearch from "./LogoSearch";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import { CgMenuRightAlt } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
import MobilNavbar from "./MobilNavbar";

const Header = () => {
  const [windowY, setWindowY] = useState(0);
  const [isshow, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Throttle বা Debounce ব্যবহার করা ভাল
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
    <header
    className="bg-assent z-100"
    style={{ willChange: "transform" }}>
    <div className="mx-auto max-sm:sm:py-4 py-0">
      <nav className="max-sm:hidden">
        {/* TopBar - Hide on Scroll */}
        <div
          className={`transition-transform duration-300 ease-in-out ${
            windowY > 50 ? "absolute h-0 overflow-hidden -translate-y-full z-50  " : "relative translate-y-0 z-50"
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
      <div className="max-sm:block hidden px-4 bg-white pb-2">
        <LogoSearch />
        <div className="flex justify-between items-center">
          <h1 className="sm:text-2xl text-xl font-bold tracking-wider">
            <span className="text-light bg-primary px-2 rounded-sm font-bold">
              D
            </span>
            aily Mart
          </h1>
          <div onClick={handleShow} className="text-2xl cursor-pointer">
            {isshow ? <VscClose size={40} /> : <CgMenuRightAlt size={40} />}
          </div>
        </div>
        <div
          className={`max-sm:block hidden absolute top-0 left-0 w-full bg-white z-50 transition-all duration-300 ease-in-out ${
            isshow ? "h-screen" : "h-0 overflow-hidden"
          }`}
        >
          {isshow && (
            <div onClick={handleShow} className="text-2xl cursor-pointer p-4">
              <VscClose size={40} />
            </div>
          )}
          {isshow && <MobilNavbar />}
        </div>
      </div>
    </div>
  </header>
  
  
  
  );
};

export default Header;
