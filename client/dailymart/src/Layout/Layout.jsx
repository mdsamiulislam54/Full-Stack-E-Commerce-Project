import { Outlet } from "react-router-dom"
import Header from "../componants/Header/Header"


const Layout = () => {
  return (
    <div className=" sticky top-0 z-50 w-full bg-light shadow  transition-all duration-300 ease-in-out">
        <Header />
        <Outlet />
        

    </div>
  )
}

export default Layout