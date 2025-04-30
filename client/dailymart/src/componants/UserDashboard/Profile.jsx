import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Modal from "react-modal";
import { IoIosCloseCircle } from "react-icons/io";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    Address: "",
    zip: "",
    Division: "",
    country: "",
    Districts: "",
    Upzilla: "",
  });

  const [userProfileData, setUserProfileData] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  

  // Load data from localStorage when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("userProfile");
    if (savedData) {
      setUserData(JSON.parse(savedData));
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Save to localStorage
  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(userData));
    Swal.fire({
      title: "Success! 🎉",
      text: "Successfully saved 🎉🎉🎉",
      icon: "success",
      confirmButtonText: "Cool 😎",
    });
    setIsOpen(false);
  };
  const userPData = localStorage.getItem("userProfile");
  
  console.log(userPData);
  return (
    <div className="p-10">
      <div className="grid sm:grid-cols-3 gap-2">
        <div className="flex flex-col gap-3 mb-4 bg-gray-100 p-2">
          <h2 className="text-md tracking-wide font-dm-snas font-semibold">
            Full Name:
          </h2>
          <p className="text-sm tracking-wide">{userData.name}</p>
        </div>
        <div className="flex flex-col gap-3 mb-4 bg-gray-100 p-2">
          <h2 className="text-md tracking-wide font-dm-snas font-semibold">
            Email:
          </h2>
          <p className="text-sm tracking-wide">{userData.email}</p>
        </div>
        <div className="flex flex-col gap-3 mb-4 bg-gray-100 p-2">
          <h2 className="text-md tracking-wide font-dm-snas font-semibold">
            Phone:
          </h2>
          <p className="text-sm tracking-wide">{userData.phone}</p>
        </div>
        <div className="flex flex-col gap-3 mb-4 bg-gray-100 p-2">
          <h2 className="text-md tracking-wide font-dm-snas font-semibold">
            Address:
          </h2>
          <p className="text-sm tracking-wide">{userData.address}</p>
        </div>
        <div className="flex flex-col gap-3 mb-4 bg-gray-100 p-2">
          <h2 className="text-md tracking-wide font-dm-snas font-semibold">
            Division:
          </h2>
          <p className="text-sm tracking-wide">{userData.division}</p>
        </div>
        <div className="flex flex-col gap-3 mb-4 bg-gray-100 p-2">
          <h2 className="text-md tracking-wide font-dm-snas font-semibold">
            Districts:
          </h2>
          <p className="text-sm tracking-wide">{userData.districts}</p>
        </div>
        <div className="flex flex-col gap-3 mb-4 bg-gray-100 p-2">
          <h2 className="text-md tracking-wide font-dm-snas font-semibold">
            Upzila:
          </h2>
          <p className="text-sm tracking-wide">{userData.upzila}</p>
        </div>
        <div className="flex flex-col gap-3 mb-4 bg-gray-100 p-2">
          <h2 className="text-md tracking-wide font-dm-snas font-semibold">
            Zip Code:
          </h2>
          <p className="text-sm tracking-wide">{userData.zip}</p>
        </div>
      </div>

      <button
        onClick={openModal}
        className="px-10 py-2 bg-primary text-white rounded-md cursor-pointer"
      >
        Edit
      </button>
    
      <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  className="bg-white shadow-2xl p-8 rounded-2xl max-w-lg w-full mx-auto my-20 relative"
  overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
  contentLabel="User Information Panel"
>
  {/* Close Icon */}
  <IoIosCloseCircle
    onClick={closeModal}
    size={36}
    className="cursor-pointer text-primary absolute top-3 right-3 hover:scale-110 transition"
  />

  {/* Title */}
  <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
    User Information
  </h2>

  {/* Form */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
    <div>
      <label className="block text-gray-700 mb-1 font-medium">Name</label>
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>

    <div>
      <label className="block text-gray-700 mb-1 font-medium">Email</label>
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>

    <div>
      <label className="block text-gray-700 mb-1 font-medium">Phone</label>
      <input
        type="text"
        name="phone"
        value={userData.phone}
        onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>

    <div>
      <label className="block text-gray-700 mb-1 font-medium">Division</label>
      <input
        type="text"
        name="division"
        value={userData.Division}
        onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>

    <div>
      <label className="block text-gray-700 mb-1 font-medium">District</label>
      <input
        type="text"
        name="districts"
        value={userData.Districts}
        onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>

    <div>
      <label className="block text-gray-700 mb-1 font-medium">Upazila</label>
      <input
        type="text"
        name="upzila"
        value={userData.Upzilla}
        onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>

    <div>
      <label className="block text-gray-700 mb-1 font-medium">Zip Code</label>
      <input
        type="text"
        name="zip"
        value={userData.Zip}
        onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>

    <div className="sm:col-span-2">
      <label className="block text-gray-700 mb-1 font-medium">Address</label>
      <textarea
        name="address"
        
        value={userData.address}
        onChange={handleChange}
        rows="3"
        className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      ></textarea>
    </div>
  </div>

  {/* Save Button */}
  <button
    onClick={handleSave}
    className="mt-6 w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition duration-300"
  >
    Save Profile
  </button>
</Modal>

    </div>
  );
};

export default Profile;
