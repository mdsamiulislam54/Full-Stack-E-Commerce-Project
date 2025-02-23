import { useRef } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Registration = () => {
  const clearForm = useRef(null);

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

    // Reset form after submission
    formData.reset();
  };

  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit} ref={clearForm} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 border-b rounded outline-none"
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
              <Link className="font-bold text-primary hover:underline transition-all duration-300 hover:opacity-85">
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
