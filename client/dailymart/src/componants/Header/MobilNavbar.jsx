
import NavBar from "./NavBar"
import TopBar from "./TopBar"
import { IoIosSearch } from "react-icons/io";



const MobilNavbar = ({isshow}) => {
  return (
    <div>
        <div className="p-4" onClick={isshow}>
             <div className="relative  ">
              <input type="text" name="" id="" placeholder="Sarch products..." className="border-1 border-gray-400 outline-none p-1 rounded-sm w-full sm:w-2/3 md:w-1/2"/>
              <span className=" ">
                <button className=" absolute top-0 right-0 text-center border-l-1 border-gray-400 text-dark hover:bg-secondary transition-colors duration-300 px-4  h-full rounded-r-sm cursor-pointer"><IoIosSearch/></button>
              </span>
            </div>
        <TopBar/>
        <NavBar/>

            
        </div>
    </div>
  )
}

export default MobilNavbar