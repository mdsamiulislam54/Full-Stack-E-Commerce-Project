import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const SuccessPayment = () => {
  const { tran_id } = useParams(); // Get the transaction ID from the URL
  const navigate = useNavigate();  // Hook to navigate to another route

  console.log(tran_id); // Check the transaction ID in the console

  useEffect(() => {
    if (tran_id) {
      axios
        .post(`http://localhost:3030/payment-success/${tran_id}`, {
          tran_id: tran_id, // Pass the transaction ID
          status: "success", // Mark the payment as successful
        })
        .then(() => {
          // Show a success alert using SweetAlert
          Swal.fire({
            title: "🎉 Payment Successful!",
            text: `Transaction ID: ${tran_id}`,
            icon: "success",
            confirmButtonText: "Okay",
            backdrop: true, // Optional: Add backdrop to the alert
          });

          // Redirect to the user dashboard or any other page
          navigate("/userDashboard"); 
        })
        .catch((err) => {
          // Show an error alert if the order update fails
          Swal.fire({
            title: "❌ Error!",
            text: "Order update failed. Please try again.",
            icon: "error",
            confirmButtonText: "Close",
          });
          console.error("Order update failed", err); // Log the error to the console
        });
    }
  }, [tran_id]); // Dependency array includes tnx_id and navigate

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
