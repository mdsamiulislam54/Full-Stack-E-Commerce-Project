import { useNavigate, useParams  } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";


const SuccessPayment = () => {
  const queryParams = new URLSearchParams(window.location.search);
const paymentStatus = queryParams.get('status');
  const { tran_id } = useParams(); 
  const navigate = useNavigate();
  
useEffect(() => {

  if (tran_id && paymentStatus === "success") {
   
  axios.get(`https://dailymart.up.railway.app/api/users/payment-success/${tran_id}`, {
    paymentStatus
  })
  .then((res) => {
    if (res.data.success) {
      Swal.fire("Success!", res.data.message, "success");
      setTimeout(() => navigate("/userDashboard"), 3000);
    } else {
      throw new Error(res.data.message);
    }
  })
  .catch((err) => {
    Swal.fire("Failed!", err.response?.data?.message || err.message, "error");
    console.error("API Error:", err);
  });
  }
}, [tran_id, navigate, paymentStatus]);
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-700">Thank you for your purchase!</p>
      </div>
    </div>
  );
};

export default SuccessPayment;
