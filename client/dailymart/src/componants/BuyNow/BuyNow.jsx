import { useState } from "react";
import Modal from "react-modal";
import Select from "react-select";
import cities from "../../utilitis/division";
import districts from "../../utilitis/districts";
import districtUpazilas from "../../utilitis/upzila";

const BuyNow = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistricts, setSelectedDistricts] = useState(null);
    const [selectedUpzilla, setSelectedUpzilla] = useState(null);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="">
      <div className="w-11/12 mx-auto py-5">
        <div className=" grid sm:grid-cols-5 gap-4 ">
          <div className="sm:col-span-3">
            <div className="flex justify-between items-center mb-4 bg-gray-100 p-3 rounded-md">
              <h4 className="text-lg tracking-wide font-semibold">
                Shipping & Billing
              </h4>
              <button
                onClick={openModal}
                className=" text-lg tracking-wide font-semibold text-primary cursor-pointer"
              >
                Add New Address
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Registration Form"
                className="bg-gray-200    shadow-2xl p-6 rounded-lg opacity-100    mx-auto my-20"
                overlayClassName="fixed inset-0 bg-gray-800 opacity-95  flex justify-center items-center z-100"
              >
                <div className="max-w-lg mx-auto p-6  rounded-lg ">
                  <h2 className="text-2xl font-bold mb-4">Buy Now</h2>
                  <form className="space-y-4 ">
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
                      options={cities}
                      value={selectedCity}
                      onChange={setSelectedCity}
                      placeholder="Select City"
                      className="w-full p-2 border-b border-gray-400 outline-none"
                    ></Select>
                    {/* all districts  */}
                    <Select
                      options={districts}
                      value={selectedDistricts}
                      onChange={setSelectedDistricts}
                      placeholder="Select your city"
                      className="w-full p-2 border-b border-gray-400 outline-none"
                    ></Select>
                    <Select
                        options={districtUpazilas}
                        value={selectedUpzilla}
                        onChange={setSelectedUpzilla}
                        placeholder="Select your city"
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
                 

                    <label className="block">Payment Method:</label>
                    {/* <select name="paymentMethod"  className="w-full p-2 border rounded">
                    <option value="Bkash">Bkash</option>
                    <option value="Nagad">Nagad</option>
                    <option value="Rocket">Rocket</option>
                    <option value="Cash on Delivery">Cash on Delivery</option>
                    </select> */}
                    <input type="button" value="Save" />
                  </form>
                </div>
              </Modal>
            </div>
          </div>
          <div className="sm:col-span-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            veniam quod, aliquam mollitia eius ex suscipit provident molestiae
            tempora vel neque laborum officia necessitatibus voluptate earum ea?
            Sed, maiores atque.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
