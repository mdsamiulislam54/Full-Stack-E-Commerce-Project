import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

const ShopCart = () => {
  return (
    <div className="relative">
        <Link className="relative">
        <TiShoppingCart size="30" />
        </Link>
        <span className="absolute -top-2 -right-2 ">0</span>
        
    </div>
  )
}

export default ShopCart