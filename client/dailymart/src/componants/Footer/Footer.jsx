import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";
import { FaTelegram ,FaFacebook ,FaTwitter,FaInstagram,FaGithub,FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="my-10 bg-primary ">
      <div className="shadow-2xl ">
        <NewsLetter />
      </div>
      <div>
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
            <h2>Information</h2>
           <div className="grid grid-cols-2 gap-2 mt-4">
           <Link to="/about" className="text-sm mt-2 block">About Us</Link>
            <Link to="/contact" className="text-sm mt-2 block">Contact Us</Link>
            <Link to="/privacy" className="text-sm mt-2 block">Privacy Policy</Link>
            <Link to="/terms" className="text-sm mt-2 block">Terms & Conditions</Link>
            <Link to="/faq" className="text-sm mt-2 block">FAQ</Link>
            <Link to="/support" className="text-sm mt-2 block">Support</Link>
            <Link to="/shipping" className="text-sm mt-2 block">Shipping & Returns</Link>
            <Link to="/cancellation" className="text-sm mt-2 block">Cancellation & Returns</Link>
            <Link to="/track-order" className="text-sm mt-2 block">Track Order</Link>
            <Link to="/sitemap" className="text-sm mt-2 block">Sitemap</Link>
            <Link to="/blog" className="text-sm mt-2 block">Blog</Link>
            <Link to="/careers" className="text-sm mt-2 block">Careers</Link>
            <Link to="/feedback" className="text-sm mt-2 block">Feedback</Link>
            <Link to="/testimonials" className="text-sm mt-2 block">Testimonials</Link>
            <Link to="/partners" className="text-sm mt-2 block">Partners</Link>
            <Link to="/affiliates" className="text-sm mt-2 block">Affiliates</Link>
            <Link to="/returns" className="text-sm mt-2 block">Returns & Exchanges</Link>
            <Link to="/warranty" className="text-sm mt-2 block">Warranty</Link>
            <Link to="/gift-cards" className="text-sm mt-2 block">Gift Cards</Link>
           </div>
            </div>
            <div>
                <h2>Customer Care</h2>
                <Link to="/userdashboard" className="text-sm mt-2 block">My Account</Link>
                <Link to="/support" className="text-sm mt-2 block">Support</Link>
                <Link to="/faq" className="text-sm mt-2 block">FAQs</Link>
                <Link to="/shipping" className="text-sm mt-2 block">Shipping & Returns</Link>
                <Link to="/cancellation" className="text-sm mt-2 block">Cancellation & Returns</Link>
                <Link to="/track-order" className="text-sm mt-2 block">Track Order</Link>
                <Link to="/sitemap" className="text-sm mt-2 block">Sitemap</Link>
                <Link to="/blog" className="text-sm mt-2 block">Blog</Link>
                <Link to="/careers" className="text-sm mt-2 block">Careers</Link>
                <Link to="/feedback" className="text-sm mt-2 block">Feedback</Link>
            </div>
           </div>
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
