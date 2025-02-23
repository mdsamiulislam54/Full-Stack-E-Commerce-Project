import axios from "axios";
import { useRef,  } from "react";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";




const Login = () => {
  const clearRef = useRef(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = clearRef.current;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    if ( !email || !password) {
      toast.error("Please fill out all fields.", { position: "top-center", autoClose: 3000 });
      return;
    }
    // Checking if email, and password are provided
    if (email && password) {
      try {
        // Sending POST request to the API
        const response = await axios.post("http://localhost:5000/api/users/login", {
        
          email:email,
          password:password
        });

        // Handle successful registration response
        if (response.status === 200 || response.status===201) {
          toast.success("Login successful", {
            position: "top-right",
            autoClose: 3000,
          });
        } else {
          toast.error("Something went wrong. Please try again.", {
            position: "top-center",
            autoClose: 3000,
          });
        }
      } catch (error) {
        toast.error("Invlid Email and password", {
          position: "top-center",
          autoClose: 3000,
        });
        console.error("Error during registration:", error);
      }
    } else {
      toast.error("Please fill out all fields.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
    // Handle form submission logic here

    form.reset();
  };

  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit} ref={clearRef} className="space-y-4 ">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border-b rounded outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border-b rounded outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-primary text-white p-2 rounded hover:opacity-85"
          >
            Login
          </button>
          <div>
            <p className="py-2 text-sm text-center tracking-wide">
              Do Not have an account? Please{" "}
              <Link
                
                className="font-bold text-primary hover:underline transition-all duration-300 hover:opacity-85 "
              >
                Registration.
              </Link>
            </p>
          </div>
        </form>
        {/* React Modal */}
       <ToastContainer/>
      </div>
    </div>
  );
};

export default Login;
