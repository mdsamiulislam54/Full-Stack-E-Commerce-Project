import { useState } from "react";
import { PiTelegramLogoLight } from "react-icons/pi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }
    // Send email to the server
    axios
      .post("http://localhost:5000/api/users/send-email", { email })
      .then(() => {
        toast.success("Subscribed successfully!");
        setEmail("");
      })
      .catch((error) => {
        console.error("There was an error subscribing!", error);
        toast.error("Subscription failed. Please try again later.");
      });
  };

  return (
    <div className="shadow-lg bg-primary py-12 mt-10  ">
      <div className="w-11/12 mx-auto">
        <div className="flex sm:flex-row flex-col sm:items-center items-center sm:justify-between justify-center gap-6">
          {/* Left Section */}
          <div className="flex sm:flex-row flex-col items-center  sm:items-start text-center sm:text-left gap-4 ">
            <div className=" ">
              <PiTelegramLogoLight size={80} className="text-light" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-light">
                Subscribe to our Newsletter
              </h1>
              <p className=" mt-2 text-light">
                Stay updated with our latest deals, promotions, and offers.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex sm:flex-row flex-col  sm:w-auto gap-4 w-full"
            >
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none  outline-none text-light w-full
              
              
              "
              />
              <button className="bg-light  hover:bg-secondary transition-all text-dark rounded-md px-6 py-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default NewsLetter;
