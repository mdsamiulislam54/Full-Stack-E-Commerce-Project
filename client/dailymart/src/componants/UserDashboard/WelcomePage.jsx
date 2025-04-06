import { useSelector } from "react-redux";
import Logo from '../../assets/brand-logo.png'



const WelcomePage = () => {
  const user = useSelector((state)=> state.user.user)
  return (
    <div className=" flex items-center justify-center mt-[10%]  px-4">
      <div className="bg-white/80 backdrop-blur-md p-10 rounded-xl text-center  max-w-md w-full">
        <div className="flex justify-center items-center">
        <img
          className=" rounded-full object-cover "
          src={Logo}
          alt={user?.name}
        />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome ❤️‍🩹</h1>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{user?.name}! 👋</h1>
        <p className="text-gray-600 mb-6">
          Glad to see you again. Let’s manage your profile and explore the dashboard.
        </p>

       
      </div>
    </div>
  );
};

export default WelcomePage;
