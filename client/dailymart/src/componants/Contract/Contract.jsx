import { CiMobile3 } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import Swal from 'sweetalert2'
import { useRef } from "react";
import { useNavigate } from "react-router-dom";


const Contract = () => {
    const clearfrom = useRef(null)
    const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = clearfrom.current
    const name = e.target.name.value
    Swal.fire({
        title: `Hello, ${name}! 👋`,
        text: 'Your form has been submitted successfully.',
        icon: 'success',
        confirmButtonText: 'Okay',
        background: '#f0f9ff',
        color: '#333',
        confirmButtonColor: '#4C1D95',
      
      });

      from.reset()
      navigate('/')
   
  };
  return (
    <div>
      <div className="w-8/12 mx-auto my-22">
        <div className="flex justify-between gap-3">
          <div className="flex gap-2 shadow p-10">
            <span>
              <CiMobile3 size={50} />
            </span>
            <span>
              <p className="text-xl font-medium ">Phone</p>
              <p className="text-md font-light">+880-1612086842</p>
            </span>
          </div>
          <div className="flex gap-2 shadow p-10">
            <span>
              <AiOutlineMail size={45} />
            </span>
            <span>
              <p className="text-xl font-medium ">Email</p>
              <p className="text-md font-light"> samiulm5332@gmail.com</p>
            </span>
          </div>
          <div className="flex gap-2 shadow p-10">
            <span>
              <IoLocationOutline size={45} />
            </span>
            <span>
              <p className="text-xl font-medium ">Address</p>
              <p className="text-md font-light">Gaibandha, BD</p>
            </span>
          </div>
        </div>
        <div className="my-22">
          <h2 className="mb-4 font-dm-snas text-3xl font-medium">
            Get in Touch
          </h2>
          <form ref={clearfrom} onSubmit={handleSubmit} action="">
            <div className="flex justify-between gap-5 mb-8">
              <input
                type="text"
                required
                name="name"
                placeholder="Your name"
                className="w-full p-3 outline-none border border-gray-300 text-md font-light hover:border-primary transition-all duration-300 rounded"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                className="w-full p-3 outline-none border border-gray-300 text-md font-light hover:border-primary transition-all duration-300 rounded"
              />
              <input
                type="text"
                required
                placeholder="Your phone number"
                className="w-full p-3 outline-none border border-gray-300 text-md font-light hover:border-primary transition-all duration-300 rounded"
              />
            </div>
            <div className="mb-4">
              <textarea
                required
                className="w-full outline-none border border-gray-300 text-md font-light hover:border-primary transition-all duration-300 rounded p-3 "
                name="message"
                id=""
                placeholder="Message"
              ></textarea>
            </div>
            <input
              className="px-10 py-2 border border-gray-300 font-dm-snas text-md font-semibold bg-primary text-light hover:bg-secondary cursor-pointer transition-all duration-300 rounded-md hover:text-light"
              type="submit"
              value="Send Message"
            />
          </form>
          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14424.839097745633!2d89.52942239530023!3d25.330740886719767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fd22d69e4357ab%3A0x6ecd8a9269ec86ca!2sGaibandha!5e0!3m2!1sen!2sbd!4v1744441986606!5m2!1sen!2sbd"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
