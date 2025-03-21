
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mt-2 text-center">
        The page you&apos;re looking for might have been removed or temporarily unavailable.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-primary text-white text-lg font-semibold rounded-lg shadow-md hover:bg-secondary transition-all"
      >
        Back to Home
      </Link>
   
    </div>
  );
};

export default NotFound;
