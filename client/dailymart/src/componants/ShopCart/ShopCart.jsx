import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

const ShopCart = () => {
  return (
    <div className="fixed top-[50%] right-5 z-50 bg-white shadow-lg p-3 rounded-full animate-bounce hover:animate-none">
      <Link className="relative">
        <TiShoppingCart size="30" className="text-gray-700 " />
        <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          0
        </span>
      </Link>
    </div>
  );
};

export default ShopCart;
