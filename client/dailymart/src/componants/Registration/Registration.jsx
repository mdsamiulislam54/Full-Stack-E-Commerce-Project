import {  useRef } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { openLoginModal } from "../../redux/features/loginSlice";
import { closeRgistermodal } from "../../redux/features/registerSlice";


const Registration = () => {

  // const isModalOpenHandelarRgister = useSelector((state)=> state.register.isRegistretionmodalOpen)
  // const isModalOpenHandelar = useSelector((state)=> state.login.isLoginModalOpen)

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

  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit} ref={clearForm} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full h-full p-2 border-b rounded outline-none "
            required
          />
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
            className="w-full bg-primary text-white p-2 rounded hover:opacity-85 cursor-pointer"
          >
            Register
          </button>
          <div>
            <p className="py-2 text-sm text-center tracking-wide">
              Already have an account? Please{" "}
              <Link onClick={openModalHandaler} className="font-bold text-primary hover:underline transition-all duration-300 hover:opacity-85">
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
