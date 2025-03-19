import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShopCart = () => {
  const totalQuantity = useSelector((state)=> state.cart.totalQuantity) ;
  return (
    <div className="fixed top-[50%] right-5 z-50 bg-primary shadow-lg p-3 rounded-full animate-bounce hover:animate-none">
      <Link to={'/cartItems'} className="relative">
        <TiShoppingCart size="30" className="text-light " />
        {totalQuantity >= 0 && (
          <span className="absolute -top-4 -right-3  bg-secondary text-dark font-bold  text-md px-2 rounded-full">
            {totalQuantity}
          </span>
        )}
      </Link>
    </div>
  );
};

export default ShopCart;
