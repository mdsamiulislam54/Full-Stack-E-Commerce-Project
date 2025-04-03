import { useState } from "react";
import Modal from "react-modal";
import Select from "react-select";
import { IoIosCloseCircle } from "react-icons/io";
import division from "../../utilitis/division";
import districts from "../../utilitis/districts";
import districtUpazilas from "../../utilitis/upzila";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShippingAddress } from "../../redux/features/shippingAddressSlices";




const BuyNow = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistricts, setSelectedDistricts] = useState(null);
  const [selectedUpzilla, setSelectedUpzilla] = useState(null);
  const {products} = useSelector((state) => state.buynow)
  const shippingAddress = useSelector((state) => state.shippingAddress.shippingAddress);
  
  const dispatch = useDispatch()
  const handleSubmited = (e)=>{
    e.preventDefault()
    const userAddress = {
      city: selectedCity.label,
      district: selectedDistricts.label,
      upzilla: selectedUpzilla.label,
      name : e.target.name.value,
      phone : e.target.phone.value,
      email : e.target.email.value,
      zip : e.target.zip.value,
      address : e.target.address.value,
     
    }
   dispatch(setShippingAddress(userAddress))
   closeModal()
   console.log(userAddress)
    
  }
 
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto py-5">
        <div className=" grid sm:grid-cols-6 gap-4 ">
          <div className="sm:col-span-4">
            <div className="flex justify-between items-center mb-4 bg-light p-3 rounded-md">
              <h4 className="text-lg tracking-wide font-semibold">
                Shipping & Billing
              </h4>
              <button
                onClick={openModal}
                className=" text-lg tracking-wide font-semibold text-primary cursor-pointer"
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
                  <form  onSubmit={handleSubmited} className="space-y-4 ">
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
              <div className="flex justify-between items-center mb-4 p-3 rounded-md">
                <span className="text-md font-semibold"> Name :  <span className="text-sm font-semibold text-gray-600" >{shippingAddress.name || "N/N"}</span></span>
                <span className="text-md font-semibold">Phone : <span className="text-sm font-semibold text-gray-600"> {shippingAddress.phone || "N/N"}</span></span>
                <span className="text-md font-semibold"> Email : <span className="text-sm font-semibold text-gray-600"> {shippingAddress.email || "N/N"}</span></span>
                <span className="text-md font-semibold">Zip Code : <span className="text-sm font-semibold text-gray-600"> {shippingAddress.zip || "N/N"}</span></span>
              </div>
              <div className="">
                <span className="text-md font-semibold">Address : <span className="text-sm font-semibold text-gray-600">{`${shippingAddress.address}, ${shippingAddress.upzilla}, ${shippingAddress.district}, ${shippingAddress.city}`}</span></span>
                
              </div>
              <div>
                <div className="mt-10 bg-light">
                  {
                    products.map((product) => (
                      <div key={product.id} className="flex items-center gap-4 mb-4 py-4 rounded-md border-t  border-gray-400">
                        <img src={product.img} alt={product.title} className="w-30 h-30 object-contain" />
                        <span className="text-md font-semibold">{product.title}</span>
                       
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="bg-gray-100 p-3 rounded-md">
              <h4 className="text-lg tracking-wide font-semibold mb-4">
                Order Summary
              </h4>
              <div className="flex  gap-4 items-center mb-4 p-3 rounded-md ">
              <input className="border p-3 border-gray-4 rounded-lg border-gray-400 outline-none" type="text" placeholder="Enter Your Coupon Code" />
                <button className="bg-primary text-light hover:bg-secondary hover:text-dark transition-all duration-300 font-semibold text-lg tracking-wide cursor-pointer rounded-md px-4 py-2">
                    Apply
                </button>
              </div>
              <div className="flex justify-between items-center mb-4 p-3 rounded-md">
                <span className="text-md font-semibold">Item Price</span>
                <span className="text-md font-semibold">0</span>
              </div>
              <div className="flex justify-between items-center mb-4 p-3 rounded-md border-b border-gray-400">
                <span className="text-md font-semibold">Delivery Fee</span>
                <span className="text-md font-semibold">0</span>
              </div>
              <div className="flex justify-between items-center mb-4 p-3 rounded-md ">
                <span className="text-md font-semibold">Total :</span>
                <span className="text-md font-semibold">0</span>
              </div>
              <button
              className="text-center w-full bg-primary text-light hover:bg-secondary hover:text-dark transition-all duration-300 font-semibold text-lg tracking-wide cursor-pointer rounded-md px-4 py-2"
              >Proceed to pay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
