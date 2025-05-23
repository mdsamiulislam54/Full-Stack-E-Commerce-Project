import { useDispatch, useSelector } from "react-redux";
import WelcomePage from "./WelcomePage";
import Profile from "./Profile";
import Order from "./Order";
import Wishlist from "./Wishlist";

import Setting from "./Setting";

import Cart from "./Cart";
import { Link } from "react-router-dom";
import { setActiveComponent } from "../../redux/features/UiComponatsSlice";
import { Suspense } from "react";
const UserContainer = ({ handleLogout }) => {
  const dispatch = useDispatch();

  const isActiveComponent = useSelector((state) => state.ui.activeComponent);
  console.log(isActiveComponent);
  const renderComponent = () => {
    switch (isActiveComponent) {
      case "":
        return <WelcomePage />;
      case "profile":
        return <Profile />;
      case "orders":
        return <Order />;
      case "whishlist":
        return <Wishlist />;
     
      case "cart":
        return <Cart />;
      case "Settings":
        return <Setting />;

      default:
        return <WelcomePage />;
    }
  };

  return (
    <div>
      <div>
        <nav className="flex justify-between items-center p-2 bg-gray-100">
          <Link
            onClick={() => dispatch(setActiveComponent(""))}
            className="text-xl font-semibold tracking-wide"
          >
            Dashboard
          </Link>
        
        </nav>
        <Suspense fallback={'loading'}>
        <div>{renderComponent()}</div>
        </Suspense>
        
      </div>
    </div>
  );
};

export default UserContainer;
