import { Outlet } from "react-router-dom"
import Header from "../componants/Header/Header"



const Layout = () => {
  return (
    <div className="sticky top-0 z-50" >
        <Header />

        <Outlet />
   
  
        

    </div>
  )
}
//className=" sticky top-0 left-0 z-50 w-full  shadow  transition-all duration-700 ease-in-out"

export default Layout