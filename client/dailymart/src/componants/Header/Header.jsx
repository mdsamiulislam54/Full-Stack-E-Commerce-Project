import { useEffect, useState } from "react";
import LogoSearch from "./LogoSearch";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import { CgMenuRightAlt } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
import MobilNavbar from "./MobilNavbar";
import BandLogo from "../../assets/brand-logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [windowY, setWindowY] = useState(0);
  const [isshow, setShow] = useState(false);
  const navigate = useNavigate();

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
  const handleHomePageBack = () => {
    navigate("/");
  };

  return (
    <header className="bg-assent z-92" style={{ willChange: "transform" }}>
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
        <div
          
          className="max-sm:block hidden bg-light text-light shadow-md p-4"
        >
          <div className="flex items-center justify-between ">
            <div>
              <img
                src={BandLogo}
                alt="brand logo"
                className="w-24 object-contain"
                onClick={handleHomePageBack}
              />
            </div>
            <div  onClick={handleShow}>
              {isshow ? (
                <VscClose
                  size={24}
                 
                  className="hover:cursor-pointer text-dark"
                />
              ) : (
                <CgMenuRightAlt
                  size={24}
                  className="hover:cursor-pointer text-dark"
                />
              )}
            </div>
          </div>

          <div
            className={`max-sm:block hidden absolute top-20 left-0 w-10/12 shadow-2xl z-[100] bg-light text-dark transition-all duration-300 ease-in-out ${
              isshow ? "h-screen" : "h-0 overflow-hidden"
            }`}
          >
            {isshow && <MobilNavbar isshow= {handleShow} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
