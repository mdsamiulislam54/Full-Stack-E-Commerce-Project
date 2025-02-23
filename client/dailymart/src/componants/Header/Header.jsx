import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      className={` relative ${
        windowY > 0 ? "bg-white shadow-md" : "bg-light shadow-sm"
      } transition-all duration-300 ease-in-out`}
    >
      <div>
        <div className="sm:max-w-screen-xl mx-auto sm:py-4">
          <nav className="max-sm:hidden">
            {/* Smoothly hide TopBar and LogoSearch on scroll */}
            <AnimatePresence>
              {windowY === 0 && (
                <motion.div
                  initial={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.1, ease: "easeInOut" }}
                >
                  <TopBar />
                  <LogoSearch />
                </motion.div>
              )}
            </AnimatePresence>

            {/* NavBar - Always visible */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white  transition-all duration-300 ease-in-out"
            >
              <NavBar/>
            </motion.div>
          </nav>
          {/* Mobile View */}
          <div className="  max-sm:block hidden px-4 bg-white pb-2">
            <LogoSearch />
            <div className="flex justify-between items-center">
              <h1 className="sm:text-2xl text-xl font-bold tracking-wider  ">
                <span className="text-light bg-primary px-2 rounded-sm font-bold">
                  D
                </span>
                aily Mart
              </h1>
              {/* Hamburger Menu */}
              <div onClick={handleShow} className="text-2xl cursor-pointer">
                {isshow ? <VscClose size={40} /> : <CgMenuRightAlt size={40} />}
              </div>
            </div>
            {/* Mobile Navbar */}
            {/* Mobile Navbar */}
            <div
              className={`max-sm:block hidden absolute top-0 left-0 w-full bg-white z-50 transition-all duration-300 ease-in-out ${
                isshow ? "h-screen" : "h-0 overflow-hidden"
              }`}
            >
              {isshow && (
                <div
                  onClick={handleShow}
                  className="text-2xl cursor-pointer p-4"
                >
                  <VscClose size={40} />
                </div>
              )}
              {isshow && <MobilNavbar />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
