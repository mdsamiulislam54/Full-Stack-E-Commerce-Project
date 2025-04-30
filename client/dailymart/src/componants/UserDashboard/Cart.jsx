import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  decrementQuantity,
  addToCart,
  clearCart,
} from "../../redux/features/cartSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { addToCheckout } from "../../redux/features/checkoutSlice";
import { ToastContainer, toast } from "react-toastify";
import { IoBagCheckOutline } from "react-icons/io5";
import { useState } from "react";

import Swal from "sweetalert2";

const Cart = () => {
    const { cartItems, totalPrice, shappingFee } = useSelector(
      (state) => state.cart
    );
    console.log(cartItems)
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();
  
    const dispatch = useDispatch();
    // Calculate the total price of checked items
  
   
    const handleCheckOut = (product) => {
      navigate("/checkout");
      dispatch(addToCheckout(product));
    };
    const handleCheckProduct = ()=>{
      if (selectedProduct) {
        handleCheckOut(selectedProduct);
      } else {
        toast.error("Please select a product to checkout",{
          position: "top-right",
          autoClose: 2000,
        })
      }
    }
  
    const handleClearAllCart = () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this item!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#4C1D95",
        cancelButtonColor: "#F59E0B",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(clearCart());
          navigate('/');
        }
      });
    }
  return (
      <div className=" min-h-screen">
          <div className="w-11/12 mx-auto  ">
            <div></div>
            <div className="flex justify-between items-center rounded mb-4 p-4">
              <h1 className="text-xl font-semibold text-gray-700 ">
                Shopping Cart
              </h1>
              <button
                onClick={handleClearAllCart}
                className="text-lg tracking-wider font-medium hover:text-red-500 transition-all duration-300 cursor-pointer"
              >
                All Delete
              </button>
            </div>
    
            {cartItems.length === 0 ? (
              <p className="text-center text-light text-lg">Your cart is empty</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Cart Items Section */}
                <div className="sm:col-span-2 bg-white sm:p-4 rounded-lg ">
                  {cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="sm:flex items-center border-b-2 border-gray-300 py-4 space-x-9"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        className="w-12 h-12 object-contain rounded-md"
                      />
    
                      <div className="ml-4 flex-1 max-sm:flex gap-4 items-center">
                        <h3 className="text-sm font-medium">{item.title}</h3>
                        <p className="text-gray-500 text-sm"> {item.price}</p>
                      </div>
                      {/* Quantity Buttons */}
                      <div className="flex items-center gap-5 px-4">
    
                      <div className="flex items-center space-x-5">
                        <button
                          onClick={() => dispatch(decrementQuantity(item._id))}
                          disabled={item.quantity === 1}
                          className={`px-3 text-lg font-bold rounded-md  ${
                            item.quantity === 1
                              ? "bg-secondary cursor-not-allowed"
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
                        <RiDeleteBin6Line size={20} />
                      </button>
                      <button
                        onClick={() => setSelectedProduct(item)}
                        className={`text-dark  cursor-pointer rounded-md text-sm 
                          ${selectedProduct && selectedProduct._id === item._id ? "text-secondary" : "text-primary"}
                        `}
                      >
                        <IoBagCheckOutline size={20} />
                      </button>
                      </div>
                  
                    </div>
                  ))}
                </div>
    
                {/* Checkout Section */}
                <div className=" p-4 rounded-lg ">
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
                    <span>${shappingFee + totalPrice}</span>
                  </div>
                  <button
                    onClick={handleCheckProduct}
                    className="w-full bg-secondary hover:opacity-80 transition-all duration-300 cursor-pointer text-white mt-4 py-2 rounded-lg font-medium"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
          <ToastContainer />
        </div>
  )
}

export default Cart