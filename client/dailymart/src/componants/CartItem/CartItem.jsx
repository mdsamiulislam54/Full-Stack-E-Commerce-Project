import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  decrementQuantity,
  addToCart,
} from "../../redux/features/cartSlice";

const CartItem = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="max-w-screen-xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-700 mb-5">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items Section */}
          <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-lg">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center border-b py-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                />

                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-gray-500">৳ {item.price}</p>
                </div>
                {/* Quantity Buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dispatch(decrementQuantity(item._id))}
                    disabled={item.quantity  === 1}
                    className={`px-3 py-1 rounded-md ${
                      item.quantity  === 1
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-gray-500 text-white"
                    }`}
                  >
                    -
                  </button>

                  <span className="text-lg font-medium">{item.quantity}</span>

                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md"
                  >
                    +
                  </button>
                </div>
                {/* Remove Button */}
                <button
                  onClick={() => dispatch(removeFromCart(item._id))}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Checkout Section */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>৳ {totalPrice}</span>
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-4 py-2 rounded-lg font-medium">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
