import { useState } from "react";
import { PiTelegramLogoLight } from "react-icons/pi";
import axios from "axios";
const NewsLetter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        if(!email){
            alert("Please enter your email address.");
            return;
        }
        // Send email to the server
        axios.post("http://localhost:5000/api/users/send-email", { email })
            .then(() => {
                alert("Subscription successful!");
                setEmail("");
            })
            .catch(error => {
                console.error("There was an error subscribing!", error);
                alert("Subscription failed. Please try again later.");
            });
      };

      console.log(email);
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
          <div >
          <form onSubmit={handleSubmit} className="flex sm:flex-row flex-col  sm:w-auto gap-4 w-full" >
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
    </div>
  );
};

export default NewsLetter;
