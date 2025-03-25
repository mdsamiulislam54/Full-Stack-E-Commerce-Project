import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShopCart = () => {
  const totalQuantity = useSelector((state)=> state.cart.totalQuantity) ;
  return (
    <div className="fixed top-[50%] right-5 z-50 bg-light shadow-lg p-2 sm:p-3 rounded-full animate-bounce hover:animate-none">
      <Link to={'/cartItems'} className="relative">
        <TiShoppingCart size={24} className="text-dark " />
        {totalQuantity >= 0 && (
          <span className="absolute -top-4 sm:-right-4  -right-9 -secondary text-dark font-bold  text-sm sm:text-md px-3 py-1 rounded-full ">
            {totalQuantity}
          </span>
        )}
      </Link>
    </div>
  );
};

export default ShopCart;
