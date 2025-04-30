import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux/features/wishlistSlice";
import { MdDeleteForever } from "react-icons/md";
import { addToCheckout } from "../../redux/features/checkoutSlice";
import {  useNavigate } from "react-router-dom";

   
const Wishlist = () => {
  const {whishlist} = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(whishlist);
  const handleNivigate = (product)=>{
    navigate(`/checkout`);
    dispatch(addToCheckout(product));
    

  } 

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Your Wishlist</h2>

      {whishlist === 0? (
        <p className="text-gray-500">Your wishlist is empty 😢</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {whishlist.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl border-r transition-all duration-300 overflow-hidden"
            >
            
             <img
              onClick={(()=>handleNivigate(item))}
              src={item.img}
              alt={item.title}
              className="w-full h-40 object-contain"
            />
              <div className="p-4">
                <h3 className="text-md font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.category}</p>
                <div className="mt-2">
                  <span className="text-sm font-bold text-blue-600">{item.discountPrice}</span>
                  <span className="text-sm line-through text-gray-400 ml-2">{item.price}</span>
                </div>
                <button
                  onClick={() => dispatch(removeFromWishlist(item))}
                  className="mt-4 flex items-center gap-2 text-red-600 hover:text-red-800 transition-all text-sm"
                >
                  <MdDeleteForever  size={20}/> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
