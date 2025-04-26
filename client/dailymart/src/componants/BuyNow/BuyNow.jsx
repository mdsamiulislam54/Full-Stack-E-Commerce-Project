import { useState } from "react";
import Modal from "react-modal";
import Select from "react-select";
import { IoIosCloseCircle } from "react-icons/io";
import division from "../../utilitis/division";
import districts from "../../utilitis/districts";
import districtUpazilas from "../../utilitis/upzila";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShippingAddress } from "../../redux/features/shippingAddressSlices";

import { FaHandHoldingDollar } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Bkash from "../../assets/bkash.png";
import Nagad from "../../assets/nogad.png";


const BuyNow = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistricts, setSelectedDistricts] = useState(null);
  const [selectedUpzilla, setSelectedUpzilla] = useState(null);
  const { products,totalPrice,totalQuantity } = useSelector((state) => state.buynow);
 
  const shippingAddress = useSelector(
    (state) => state.shippingAddress.shippingAddress
  );
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [checked, setChecked] = useState("");
  const [selected, setSelected] = useState('')
console.log(paymentMethod)
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handlePaymentChange = (e) => {
    e.preventDefault();
    const { value, checked } = e.target;
    setChecked(value);
    setSelected(value)
    setPaymentMethod((prev) => {
      if (checked) {
        return [ value];
      } else {
        return prev.filter((method) => method !== value);
      }
    });
  };
  const handleSubmited = (e) => {
    e.preventDefault();
    const userAddress = {
      city: selectedCity.label,
      district: selectedDistricts.label,
      upzilla: selectedUpzilla.label,
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      zip: e.target.zip.value,
      address: e.target.address.value,
    };
    dispatch(setShippingAddress(userAddress));
    closeModal();
    console.log(userAddress);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const totalDisPrice = (fee = 0, discount = 0) => {
  

    const total = fee + discount;
    return `$${total.toFixed(2)}`;
  };

  const handleOrder = (product) => {
    if (paymentMethod.length === 0) {
      toast.error("Please select a payment method!");
      return;
    }
    if (paymentMethod.length > 1) {
      toast.error("Please select only one payment method!");
      return;
    }

    const addressall = `${shippingAddress.address}, ${shippingAddress.upzilla}, ${shippingAddress.district}, ${shippingAddress.city}`;
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + 2);

    const orderData = {
      email: shippingAddress.email,
      name: shippingAddress.name,
      address: addressall,
      phone: shippingAddress.phone,
      productName: product.title,
      productImage: product.img,
      price: product.price,
      paymentMethod: paymentMethod[0],
      deliveryDate: futureDate.toLocaleDateString(),
      pcode: shippingAddress.zip,
     
    };
    const paymentEndpoint =
      paymentMethod[0] === "cash on delivary"
        ? "https://dailymart.up.railway.app/api/users/send-order-email"
        : "https://dailymart.up.railway.app/api/users/ssl-payment";

    axios
      .post(paymentEndpoint, orderData)
      .then((res) => {
        setTimeout(() => {
          navigate("/");
        }, 2000);
        if (res.data.url) {
          window.location.replace(res.data.url);
        } else {
          toast.success("Order placed successfully! ", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setOrderPlaced(true);
        }
      })
      .catch((err) => {
        console.error("Payment error:", err);
        toast.error("Payment failed. Please try again.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setOrderPlaced(false);
      });
  };



  return (
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto py-5">
        <div className=" grid sm:grid-cols-6 gap-4 ">
          <div className="sm:col-span-4">
            <div className="flex justify-between items-center mb-4 bg-light p-3 rounded-md">
              <h4 className="sm:text-lg tracking-wide font-semibold">
                Shipping & Billing
              </h4>
              <button
                onClick={openModal}
                className=" sm:text-lg tracking-wide font-semibold text-primary cursor-pointer"
              >
                Add Address
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Registration Form"
                className="bg-gray-200    shadow-2xl p-6 rounded-lg opacity-100    mx-auto my-20"
                overlayClassName="fixed inset-0 bg-gray-800 opacity-95  flex justify-center items-center z-100"
              >
                <div className="max-w-lg mx-auto p-6  rounded-lg ">
                  <div>
                    <Link onClick={closeModal}>
                      <IoIosCloseCircle size={30} />
                    </Link>
                  </div>
                  <h2 className="text-2xl font-semibold font-dm-snas mb-4 text-center">
                    Add your address
                  </h2>
                  <form onSubmit={handleSubmited} className="space-y-4 ">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                      className="w-full p-2 border-b border-gray-400 outline-none"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-full p-2 border-b border-gray-400 outline-none"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      className="w-full p-2 border-b border-gray-400 outline-none"
                    />
                    {/* division  */}
                    <Select
                      options={division}
                      value={selectedCity}
                      onChange={setSelectedCity}
                      placeholder="Select Your Division"
                      className="w-full text-gray-900"
                    ></Select>
                    {/* all districts  */}
                    <Select
                      options={districts}
                      value={selectedDistricts}
                      onChange={setSelectedDistricts}
                      placeholder="Select Your Districts"
                      className=""
                    ></Select>
                    <Select
                      options={districtUpazilas}
                      value={selectedUpzilla}
                      onChange={setSelectedUpzilla}
                      placeholder="Select Your Upzila"
                      className="w-full text-gray-900"
                    ></Select>
                    <input
                      type="text"
                      name="zip"
                      placeholder="ZIP Code"
                      required
                      className="w-full p-2 border-b border-gray-400 outline-none"
                    />
                    <textarea
                      type="text"
                      name="address"
                      placeholder="Delivery Address"
                      required
                      className="w-full p-2 border border-gray-400 outline-none"
                    />

                    {/* <label className="block">Payment Method:</label> */}
                    {/* <select name="paymentMethod"  className="w-full p-2 border rounded">
                    <option value="Bkash">Bkash</option>
                    <option value="Nagad">Nagad</option>
                    <option value="Rocket">Rocket</option>
                    <option value="Cash on Delivery">Cash on Delivery</option>
                    </select> */}
                    <input
                      className="w-full text-center p-2 bg-primary text-light hover:bg-secondary hover:text-dark transition-all duration-300 font-semibold text-lg tracking-wide cursor-pointer rounded-md"
                      type="submit"
                      value="Save"
                    />
                  </form>
                </div>
              </Modal>
            </div>
            <div className=" bg-light p-3 rounded-md">
              <div className="grid">
                <span className="text-md font-semibold ">
                  {" "}
                  Name :{" "}
                  <span className="text-sm font-semibold text-gray-600">
                    {shippingAddress.name || "N/N"}
                  </span>
                </span>
                <span className="text-md font-semibold">
                  Phone :{" "}
                  <span className="text-sm font-semibold text-gray-600">
                    {" "}
                    {shippingAddress.phone || "N/N"}
                  </span>
                </span>
                <span className="text-md font-semibold">
                  {" "}
                  Email :{" "}
                  <span className="text-sm font-semibold text-gray-600">
                    {" "}
                    {shippingAddress.email || "N/N"}
                  </span>
                </span>
                <span className="text-md font-semibold">
                  Zip Code :{" "}
                  <span className="text-sm font-semibold text-gray-600">
                    {" "}
                    {shippingAddress.zip || "N/N"}
                  </span>
                </span>
              </div>
              <div className="">
                <span className="text-md font-semibold">
                  Address :{" "}
                  <span className="text-sm font-semibold text-gray-600">{`${shippingAddress.address}, ${shippingAddress.upzilla}, ${shippingAddress.district}, ${shippingAddress.city}`}</span>
                </span>
              </div>
              <div>
                <div className="mt-10 bg-light">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="flex  gap-4 mb-4 py-4 rounded-md border-t  border-gray-400"
                    >
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-30 h-30 object-contain"
                      />
                      <div className="flex flex-col border-l px-2 border-gray-300">
                        <span className="text-md font-semibold ">
                          {product.title}
                        </span>
                        <span className="text-md font-semibold ">
                          Category : {product.category}
                        </span>
                        <span className="text-md font-semibold ">
                          Review : {product.review}
                        </span>
                        <span className="text-md font-semibold ">
                          Rating : {product.rating}
                        </span>
                        <div className="flex">
                          {product.color.map((c) => {
                            return (
                              <span
                                key={c}
                                className={` text-xs font-semibold  px-1 py-1 rounded-full bg-${c}`}
                              >
                                {c}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2 bg-light overflow-x-hidden p-1">
            <div className=" sm:p-3 rounded-md">
              <h4 className="text-lg tracking-wide font-semibold mb-4">
                Order Summary
              </h4>
              <div className="flex  sm:gap-4 items-center  mb-4 sm:p-3 rounded-md ">
                <input
                  className="border p-2 p-1 w-8/12 border-gray-4 rounded-lg border-gray-400 outline-none"
                  type="text"
                  placeholder="Enter Your Coupon Code"
                />
                <button className="bg-primary text-light hover:bg-secondary hover:text-dark transition-all duration-300 font-semibold text-lg tracking-wide cursor-pointer rounded-md px-4 py-1.5  ml-1">
                  Apply
                </button>
              </div>
              {products.map((product, index) => {
                return (
                  <div key={index} className=" mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-md font-semibold">Item Price</span>
                      <span className="text-md font-semibold">
                        ${totalPrice}
                      </span>
                     
                    </div>
                    <div className="flex justify-between items-center mb-4 ">
                      <span className="text-md font-semibold">
                        Total item:
                      </span>
                      <span className="text-md font-semibold">{totalQuantity}</span>
                    </div>
                  
                    <div className="flex justify-between items-center mb-4 border-b border-gray-400 pb-2">
                      <span className="text-md font-semibold">
                        Delivery Fee
                      </span>
                      <span className="text-md font-semibold">$5</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-400 pb-2">
                      <span className="text-md font-semibold">Total :</span>
                      <span className="text-md font-semibold">
                        {totalDisPrice(5, totalPrice || 0)}
                      </span>
                    </div>
                    <div className="py-4">
                      <div>
                        <h2 className="text-md font-semibold mb-2">
                          Payment Method:
                        </h2>
                        <span>
                          {
                           <p>Payment Metohd : {selected}</p>
                          }
                        </span>
                        <div className="grid  grid-cols-3  gap-4">
                          {/* cash on delivary */}
                          <label
                            htmlFor="cash"
                            title="Cash on delivary"
                            className={`cursor-pointer flex items-center justify-center gap-2  p-2 rounded-md w-24 h-24 sm:w-auto sm:h-auto ${
                              checked === "cash on delivary"
                                ? "bg-light shadow-xl"
                                : "bg-white shadow"
                            }`}
                          >
                            <input
                              type="checkbox"
                              id="cash"
                              onChange={handlePaymentChange}
                              value="cash on delivary"
                              className="accent-pink-500 w-0 h-0"
                            />
                            <span className="text-md font-semibold ">
                              <FaHandHoldingDollar size={40} color="red" />
                            </span>
                          </label>

                          {/* Bkash */}
                          <label
                            className={`cursor-pointer flex items-center gap-2  p-2 rounded-md w-24 h-24 sm:w-auto sm:h-auto ${
                              checked === "Bkash"
                                ? "bg-light border-pink-500 shadow-xl"
                                : "bg-white shadow"
                            }`}
                          >
                            <input
                              type="checkbox"
                              
                              onChange={handlePaymentChange}
                              value="Bkash"
                              className="accent-red-500 w-0 h-0"
                            />
                            <span className="text-md font-semibold">
                              <img src={Bkash} alt="" className="" />
                            </span>
                          </label>

                          {/* Nogad */}
                          <label
                            className={`cursor-pointer flex items-center gap-2  p-2 rounded-md w-24 h-24 sm:w-auto sm:h-auto ${
                              checked === "Nogad"
                                ? "bg-light shadow-xl"
                                : "bg-white border-gray-300 shadow"
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="Nogad"
                              onChange={handlePaymentChange}
                              value="Nogad"
                              className="accent-blue-500 w-0 h-0"
                            />
                            <span className="text-md font-semibold">
                              <img src={Nagad} alt="" />
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleOrder(product)}
                      className="text-center w-full bg-primary text-light hover:bg-secondary hover:text-dark transition-all duration-300 font-semibold text-lg tracking-wide cursor-pointer rounded-md px-4 py-2 mt-4 flex items-center justify-center gap-2"
                    >
                      <span>
                        <TbTruckDelivery size={30} />
                      </span>
                      {orderPlaced ? "✅ Order Successful" : "Place Order"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default BuyNow;
