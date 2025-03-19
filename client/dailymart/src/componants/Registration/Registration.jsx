import {  useRef,useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { openLoginModal } from "../../redux/features/loginSlice";
import { closeRgistermodal } from "../../redux/features/registerSlice";



const Registration = () => {

  // const isModalOpenHandelarRgister = useSelector((state)=> state.register.isRegistretionmodalOpen)
  // const isModalOpenHandelar = useSelector((state)=> state.login.isLoginModalOpen)
 const [showPassword, setPassword] = useState(false)
  const clearForm = useRef(null);
const dispatch = useDispatch()

const openModalHandaler = ()=>{
  dispatch(openLoginModal())
  closeModalHandler()
}
const closeModalHandler = ()=>{
  dispatch(closeRgistermodal())
}


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = clearForm.current;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
console.log(name,email,password);
    if (!name || !email || !password) {
      toast.error("Please fill out all fields.", { position: "top-center", autoClose: 3000 });
      return;
    }
    // Checking if name, email, and password are provided
    if (name && email && password) {
      try {
        // Sending POST request to the API
        const response = await axios.post("http://localhost:5000/api/users/register", {
          name:name,
          email:email,
          password:password
        });

        // Handle successful registration response
        if (response.status === 200 || response.status===201) {
          toast.success("Registration successful", {
            position: "top-right",
            autoClose: 3000,
          });
          //autu colse register modal
          setTimeout(()=> {closeModalHandler()},2500)
          //clear input fild
          formData.reset();
        } else {
          toast.error("Something went wrong. Please try again.", {
            position: "top-center",
            autoClose: 3000,
          });
        }
      } catch (error) {
        toast.error("Error during registration. Please try again.", {
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

 
  };
  const showPasswordButton = () => {
    setPassword(!showPassword);
  };

  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit} ref={clearForm} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full h-full p-2 border-b rounded outline-none text-light placeholder:text-light "
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border-b rounded outline-none text-light placeholder:text-light"
            required
          />
          <input
            type={`${showPassword ? "text" :'password'}`}
            name="password"
            placeholder="Password"
            className="w-full p-2 border-b rounded outline-none text-light placeholder:text-light"
            required
          />
          <div className="flex justify-between">
           <div className="flex justify-center items-center gap-1" >
           <input type="checkbox" name="" id="chexkbox" />
           <label htmlFor="chexkbox" className="text-sm text-light " onClick={showPasswordButton}>Show Password</label>
           </div>
           <div className="flex justify-center items-center gap-1">
           <input type="checkbox" name="" id="chexkbox2" />
           <label htmlFor="chexkbox2" className="text-sm text-light ">I agree to the terms</label>
           </div>
          </div>
          <button
            type="submit"
            className="w-full bg-light text-dark text-xl font-medium p-2 rounded hover:opacity-85 cursor-pointer"
          >
            Sign Up
          </button>
          <div>
            <p className="py-2 text-sm text-center tracking-wide flex justify-center gap-1">
              <p className="text-gray-200">Already have an account? </p>
              <Link onClick={openModalHandaler} className="font-medium text-secondary hover:underline transition-all duration-300 hover:opacity-85">
                login.
              </Link>
            </p>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Registration;
