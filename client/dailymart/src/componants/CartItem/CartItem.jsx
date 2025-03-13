import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  decrementQuantity,
  addToCart,
  clearCart,
  
} from "../../redux/features/cartSlice";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = () => {
  const { cartItems,totalPrice,shappingFee } = useSelector((state) => state.cart);

const dispatch = useDispatch()
 // Calculate the total price of checked items

const handleClear = ()=>{
    dispatch(clearCart())
}

  return (
    <div className="bg-gray-500 min-h-screen">
      <div className="w-11/12 mx-auto p-6 ">
        <div></div>
        <div className="flex justify-between items-center bg-light rounded mb-4 p-4">
          <h1 className="text-2xl font-semibold text-gray-700 ">
            Shopping Cart
          </h1>
          <button onClick={handleClear} className="text-lg tracking-wider font-medium hover:text-red-500 transition-all duration-300 cursor-pointer">All Delete</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center text-light text-lg">
            Your cart is empty
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cart Items Section */}
            <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-lg">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center border-b-2 border-gray-300 py-4 space-x-9">
                 
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-16 h-16 object-contain rounded-md"
                  />

                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-gray-500"> {item.price}</p>
                  </div>
                  {/* Quantity Buttons */}
                  <div className="flex items-center space-x-5">
                    <button
                      onClick={() => dispatch(decrementQuantity(item._id))}
                      disabled={item.quantity === 1}
                      className={`px-3 text-lg font-bold rounded-md  ${
                        item.quantity === 1
                          ? "bg-red-300 cursor-not-allowed"
                          : "bg-gray-100 text-dark "
                      }`}
                    >
                      -
                    </button>

                    <span className="text-lg font-medium">{item.quantity}</span>

                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="px-3 text-lg font-bold rounded-md bg-gray-100 cursor-pointer "
                    >
                      +
                    </button>
                  </div>
                  {/* Remove Button */}
                  <button
                    onClick={() => dispatch(removeFromCart(item._id))}
                    className=" text-dark hover:text-red-600  cursor-pointer  rounded-md text-sm"
                  >
                  <RiDeleteBin6Line size={20}/>
                  </button>
                </div>
              ))}
            </div>

            {/* Checkout Section */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${totalPrice}</span>
                
              </div>
              <div className="flex justify-between text-gray-600">
                <span>ShappingFee</span>
                <span>${shappingFee}</span>
                
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Total</span>
                <span>${shappingFee+totalPrice}</span>
                
              </div>
              <button className="w-full bg-secondary hover:opacity-80 transition-all duration-300 cursor-pointer text-white mt-4 py-2 rounded-lg font-medium">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
