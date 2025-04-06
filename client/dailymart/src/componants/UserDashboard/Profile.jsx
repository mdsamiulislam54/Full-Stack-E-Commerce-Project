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
        className="fixed inset-0 flex items-center justify-center z-100"
        overlayClassName="fixed inset-0  bg-black opacity-90 z-100"
        contentLabel=" User Information  Panel"
      >
        <div>
          <IoIosCloseCircle
            onClick={closeModal}
            size={30}
            className="cursor-pointer text-2xl text-red-500 absolute top-2 right-2"
          />
        <div className="space-y-4 grid sm:grid-cols-2 gap-5 bg-light p-5 rounded-2xl ">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className=" border px-3 py-2 rounded-md "
            />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className=" border px-3 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              className=" border px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium">Division</label>
            <input
              type="text"
              name="division"
              value={userData.Division}
              onChange={handleChange}
              className=" border px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium">Districts</label>
            <input
              type="text"
              name="districts"
              value={userData.Districts}
              onChange={handleChange}
              className=" border px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium">Upzila</label>
            <input
              type="text"
              name="upzila"
              value={userData.Upzilla}
              onChange={handleChange}
              className=" border px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium">Zip Code</label>
            <input
              type="text"
              name="zip"
              value={userData.Zip}
              onChange={handleChange}
              className=" border px-3 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Address</label>
            <textarea
              name="address"
              value={userData.Address}
              onChange={handleChange}
              className=" border px-3 py-2 rounded-md"
            />
          </div>

          <button
            onClick={handleSave}
            className=" bg-primary text-white py-2 rounded-md hover:bg-secondary cursor-pointer duration-300 transition-colors"
          >
            Save Profile
          </button>
        </div>
        </div>
      </Modal>
    </div>
  );
};

export default Profile;
