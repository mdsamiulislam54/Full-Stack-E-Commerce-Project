import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaRegistered, FaPhoneAlt, FaSearch, FaBars, FaSignInAlt } from 'react-icons/fa';


function Nav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#4C1D95] text-white mb-100">
      <div className="container mx-auto p-4">
        {/* Part 1: Customer Service & Links */}
        <div className="flex justify-between items-center">
          <span className="text-sm">24/7 Customer Service: +880-01612086842</span>
          <div className="space-x-4">
            <Link to="/" className="flex items-center space-x-1"><FaHome /><span>Home</span></Link>
            <Link to="/account" className="flex items-center space-x-1"><FaUser /><span>Account</span></Link>
            <Link to="/register" className="flex items-center space-x-1"><FaRegistered /><span>Register</span></Link>
            <Link to="/contact" className="flex items-center space-x-1"><FaPhoneAlt /><span>Contact</span></Link>
          </div>
        </div>

        {/* Part 2: Logo & Search Bar */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img src="your-logo.png" alt="Logo" className="w-32 h-auto" />
          </div>
          <div className="relative w-1/2">
            <input type="text" className="w-full p-2 rounded-md" placeholder="Search..." />
            <button className="absolute right-2 top-2">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Part 3: Navigation Menu (Dropdown & Links) */}
        <div className="hidden lg:flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <button>Category</button>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-md mt-2">
                <Link to="#">Option 1</Link>
                <Link to="#">Option 2</Link>
                <Link to="#">Option 3</Link>
              </div>
            </div>
            <div className="relative group">
              <button>All Products</button>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-md mt-2">
                <Link to="#">Option 1</Link>
                <Link to="#">Option 2</Link>
                <Link to="#">Option 3</Link>
              </div>
            </div>
            <Link to="/blog">Blog</Link>
            <Link to="/offer">Offer</Link>
            <Link to="/new-arrivals">New Arrivals</Link>
            <Link to="/todays-deals">Todays Deals</Link>
            <Link to="/gift-cards">Gift Cards</Link>
            <Link to="/login" className="flex items-center space-x-1"><FaSignInAlt /><span>Login</span></Link>
          </div>
        </div>

        {/* Hamburger Icon (for Mobile) */}
        <div className="lg:hidden flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              id="hamburger-icon"
              className="text-2xl"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FaBars />
            </button>
            <img src="your-logo.png" alt="Logo" className="w-32 h-auto" />
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hidden by Default) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-3/4 p-4 rounded-lg">
            <ul className="space-y-4">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/account">Account</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="#">Category</Link></li>
              <li><Link to="#">All Products</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/offer">Offer</Link></li>
              <li><Link to="/new-arrivals">New Arrivals</Link></li>
              <li><Link to="/todays-deals">Todays Deals</Link></li>
              <li><Link to="/gift-cards">Gift Cards</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;
