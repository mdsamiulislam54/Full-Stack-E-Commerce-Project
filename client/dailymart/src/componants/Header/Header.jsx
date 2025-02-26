import { useEffect, useState } from "react";
import LogoSearch from "./LogoSearch";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import { CgMenuRightAlt } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
import MobilNavbar from "./MobilNavbar";
import { Link } from "react-router-dom";
import Logo from "../../assets/cargo-truck.png";

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
    <header className="bg-assent z-100" style={{ willChange: "transform" }}>
      <div className="mx-auto max-sm:sm:py-4 py-0">
        <nav className="max-sm:hidden">
          {/* TopBar - Hide on Scroll */}
          <div
            className={`transition-transform duration-300 ease-in-out ${
              windowY > 50
                ? "absolute h-0 overflow-hidden -translate-y-full z-50  "
                : "relative translate-y-0 z-50"
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
        <div className="max-sm:block hidden  bg-white pb-1">
        <div className="px-4">
        <TopBar />
        <LogoSearch />
        </div>

          <div className="flex justify-between items-center px-4">
            <div className="flex sm:gap-4 gap-2 items-center justify-center">
              <Link className="">
                <img className="w-full h-10 sm:h-auto " src={Logo} alt="" />
              </Link>
              <h1 className="sm:text-3xl text-md  font-extrabold tracking-wider  flex items-center text-primary  ">
                D
                <span className="bg-gradient-to-t from-primary to-secondary text-transparent bg-clip-text">
                  A
                </span>
                IL
                <span className="bg-gradient-to-t from-primary to-secondary text-transparent bg-clip-text">
                  Y
                </span>
                M
                <span className="bg-gradient-to-t from-primary to-secondary text-transparent bg-clip-text">
                  A
                </span>
                RT
              </h1>
            </div>
            <div onClick={handleShow} className="text-2xl cursor-pointer">
              {isshow ? <VscClose size={30} /> : <CgMenuRightAlt size={30} />}
            </div>
          </div>
          <div className="">
            <NavBar />
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
