import axios from "axios";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { closeLoginModal } from "../../redux/features/loginSlice";
import { openRegisterModal } from "../../redux/features/registerSlice";
import { setUser } from "../../redux/features/userSlice";
import { useRef } from "react";

const Login = () => {
  const clearRef = useRef(null);
  const dispatch = useDispatch();

  const openModalHandaler = () => {
    dispatch(openRegisterModal());
    closeModalHandler();
  };
  const closeModalHandler = () => {
    dispatch(closeLoginModal());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = clearRef.current;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    if (!email || !password) {
      toast.error("Please fill out all fields.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    // Checking if email, and password are provided
    if (email && password) {
      try {
        // Sending POST request to the API
        const response = await axios.post(
          "http://localhost:5000/api/users/login",
          {
            email: email,
            password: password,
          }
        );

        // Handle successful registration response
        if (response.status === 200 || response.status === 201) {
          toast.success("Login successful", {
            position: "top-right",
            autoClose: 2000,
          });
          //JWT TOKEN CREATE LOCALSTORAGE
          localStorage.setItem("token", response.data.token);

          // GET PROTECTED DATA USING TOKEN
          const token = localStorage.getItem("token");

          const userData = await axios.get(
            "http://localhost:5000/api/users/protected-data",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          // Step 3: Store data in Redux
          dispatch(
            setUser({
              user: userData.data.user,
              token: token,
            })
          );

          //auto colse loging modal
          setTimeout(() => {
            closeModalHandler();
          }, 2500);

      
          form.reset();
        }
      } catch (error) {
        toast.error("Invlid Email and password", {
          position: "top-center",
          autoClose: 2000,
        });
        console.error("Error during registration:", error);
      }
    } else {
      toast.error("Please fill out all fields.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
   
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
                onClick={openModalHandaler}
                className="font-bold text-primary hover:underline transition-all duration-300 hover:opacity-85 "
              >
                Registration.
              </Link>
            </p>
          </div>
        </form>
        {/* React Modal */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
