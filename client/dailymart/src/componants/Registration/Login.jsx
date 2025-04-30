import axios from "axios";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { closeLoginModal } from "../../redux/features/loginSlice";
import { openRegisterModal } from "../../redux/features/registerSlice";
import { setUser } from "../../redux/features/userSlice";
import { useRef, useState } from "react";
import { setIsLoggedIn } from "../../redux/features/LoginCheck";


const Login = () => {
  const [showPassword, setPassword] = useState(false)
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
          import.meta.env.VITE_LOGIN_API,
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
          const user = {email}
          localStorage.setItem("user", JSON.stringify(user));
          //JWT TOKEN CREATE LOCALSTORAGE
          localStorage.setItem("token", response.data.token);

          // GET PROTECTED DATA USING TOKEN
          const token = localStorage.getItem("token");

          const userData = await axios.get(
            import.meta.env.VITE_PROTECT_DATA_API,
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
          dispatch(setIsLoggedIn(true))
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

  const showPasswordButton = () => {
    setPassword(!showPassword);
  };

  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit} ref={clearRef} className="space-y-4 ">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border-b rounded outline-none placeholder:text-light text-light"
            required
          />
          <input
            type={`${showPassword ? "text" :'password'}`}
            name="password"
            placeholder="Password"
            className="w-full p-2 border-b rounded outline-none placeholder:text-light text-light"
            required
          />
          <div className="flex items-center justify-between gap-1">
           <div className="flex items-center justify-between gap-1"> 
           <input type="checkbox" name="" id="chekbox" />
           <label htmlFor="chekbox" className="text-sm text-light">Remember Me</label>
           </div>
           <div className="flex items-center justify-between gap-1 " >
           <input type="checkbox" name="" id="chekbox2" />
           <label htmlFor="chekbox2" className="text-sm text-light" onClick={showPasswordButton} >Show password</label>
           </div>
          </div>
          <button
            type="submit"
            className="w-full bg-assent text-dark text-xl font-medium p-2 rounded hover:opacity-85"
          >
            Login
          </button>
          <div>
            <p className="py-2 text-sm text-center tracking-wide text-gray-200">
              Do Not have an account? Please{" "}
              <Link
                onClick={openModalHandaler}
                className="font-bold text-secondary hover:underline transition-all duration-300 hover:opacity-85 "
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
