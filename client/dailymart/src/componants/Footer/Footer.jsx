import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";
import { FaTelegram ,FaFacebook ,FaTwitter,FaInstagram,FaGithub,FaLinkedin,FaCcPaypal ,FaAmazonPay,FaCcMastercard  } from "react-icons/fa";
import { SiBinance } from "react-icons/si";

const Footer = () => {
  return (
    <div className=" bg-primary ">
      <div className="shadow-2xl ">
        <NewsLetter />
      </div>
      <div >
        <div className="w-11/12 mx-auto py-20 text-light ">
           <div className="flex sm:flex-row flex-col  justify-between gap-10">
           <div>
            <h2 className="text-2xl font-dm-snas font-semibold tracking-wide text-center sm:text-start">OneTech</h2>
            <p className="text-sm mt-2 font-bold text-center sm:text-start">Got Question? Call Us 24/7</p>
            <p className="text-sm mt-2 text-center sm:text-start text-secondary">+880-1612086842</p>
            <p className="text-sm mt-2 text-center sm:text-start">17 Princess Road, Dhaka</p>
            <p className="text-sm mt-2 text-center sm:text-start">Dhaka, Bangladesh 4403</p>
            <div className="flex items-center  mt-4 gap-2 justify-center sm:justify-start">
                <span className=" "><FaTelegram  size={30} /></span>
                <span><FaFacebook size={30} /></span>
                <span><FaTwitter size={30}/></span>
                <span><FaInstagram size={30}/></span>
                <span><FaGithub size={30}/></span>
                <span><FaLinkedin size={30}/></span>
            </div>
           </div>
            <div>
            <h2 className="text-2xl font-dm-snas font-semibold tracking-wide text-center sm:text-start">Information</h2>
           <div className="grid grid-cols-2 gap-2 mt-4 content-center sm:content-start">
           <Link to="/about" className="text-sm mt-2 block text-center sm:text-start">About Us</Link>
            <Link to="/contact" className="text-sm mt-2 block text-center sm:text-start">Contact Us</Link>
            <Link to="/privacy" className="text-sm mt-2 block text-center sm:text-start">Privacy Policy</Link>
            <Link to="/terms" className="text-sm mt-2 block text-center sm:text-start">Terms & Conditions</Link>
            <Link to="/faq" className="text-sm mt-2 block text-center sm:text-start">FAQ</Link>
            <Link to="/support" className="text-sm mt-2 block text-center sm:text-start">Support</Link>
            <Link to="/shipping" className="text-sm mt-2 block text-center sm:text-start">Shipping & Returns</Link>
            <Link to="/cancellation" className="text-sm mt-2 block text-center sm:text-start">Cancellation & Returns</Link>
            <Link to="/track-order" className="text-sm mt-2 block text-center sm:text-start">Track Order</Link>
            <Link to="/sitemap" className="text-sm mt-2 block text-center sm:text-start">Sitemap</Link>
            <Link to="/blog" className="text-sm mt-2 block text-center sm:text-start">Blog</Link>
            <Link to="/careers" className="text-sm mt-2 block text-center sm:text-start">Careers</Link>
            <Link to="/feedback" className="text-sm mt-2 block text-center sm:text-start">Feedback</Link>
            <Link to="/testimonials" className="text-sm mt-2 block text-center sm:text-start">Testimonials</Link>
            <Link to="/partners" className="text-sm mt-2 block text-center sm:text-start">Partners</Link>
            <Link to="/affiliates" className="text-sm mt-2 block text-center sm:text-start">Affiliates</Link>
            <Link to="/returns" className="text-sm mt-2 block text-center sm:text-start">Returns & Exchanges</Link>
            <Link to="/warranty" className="text-sm mt-2 block text-center sm:text-start">Warranty</Link>
            <Link to="/gift-cards" className="text-sm mt-2 block text-center sm:text-start">Gift Cards</Link>
           </div>
            </div>
            <div>
                <h2 className="text-2xl font-dm-snas font-semibold tracking-wide text-center sm:text-start">Customer Care</h2>
                <Link to="/userdashboard" className="text-sm mt-2 block text-center sm:text-start">My Account</Link>
                <Link to="/support" className="text-sm mt-2 block text-center sm:text-start">Support</Link>
                <Link to="/faq" className="text-sm mt-2 block text-center sm:text-start">FAQs</Link>
                <Link to="/shipping" className="text-sm mt-2 block text-center sm:text-start">Shipping & Returns</Link>
                <Link to="/cancellation" className="text-sm mt-2 block text-center sm:text-start">Cancellation & Returns</Link>
                <Link to="/track-order" className="text-sm mt-2 block text-center sm:text-start">Track Order</Link>
                <Link to="/sitemap" className="text-sm mt-2 block text-center sm:text-start">Sitemap</Link>
                <Link to="/blog" className="text-sm mt-2 block text-center sm:text-start">Blog</Link>
                <Link to="/careers" className="text-sm mt-2 block text-center sm:text-start">Careers</Link>
                <Link to="/feedback" className="text-sm mt-2 block text-center sm:text-start">Feedback</Link>
            </div>
           </div>
        
        </div>
        <div className="bg-light flex max-sm:flex-col items-center justify-between gap-2 py-4 ">
          <div className="flex max-sm:flex-col-reverse items-center justify-between gap-2   w-11/12 mx-auto">
          <p className="text-lg text-center  text-dark">Copyright ©2025 All rights reserved </p>
            <p className="flex items-center gap-4 text-dark">
                <span><FaCcPaypal  size={30}/></span>
                <span><FaAmazonPay size={30} /></span>
                <span><SiBinance  size={30}/></span>
                <span><FaCcMastercard  size={30}/></span>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
