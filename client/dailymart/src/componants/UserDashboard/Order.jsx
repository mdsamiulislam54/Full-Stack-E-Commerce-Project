import axios from 'axios';
import  { useEffect, useState } from 'react';
const Order = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users/orders') //
      .then(res => setOrders(res.data))
      .catch(err => console.error('Failed to fetch orders:', err));
  }, []);
console.log(orders)
  
  return (
    <div className="max-w-5xl mx-auto p-4">
    <h1 className="text-2xl font-bold mb-6 text-center">All Orders</h1>
    <div className=" grid sm:grid-cols-2 gap-3">
      {orders.map(order => (
        <div key={order._id} className="bg-white shadow-lg rounded-2xl p-4  gap-4">
          <div>
          <img
            src={order.productImage}
            alt={order.productName}
            className="w-full sm:w-28 h-28 rounded-lg object-contain"
          />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-1">{order.productName}</h2>
            <p className="text-gray-600 mb-2">Price: <span className="text-green-600 font-semibold">{order.price}</span></p>
            <p className="text-sm text-gray-500 mb-2">Payment: <span className="text-gray-700">{order.paymentMethod}</span></p>

            <div className="mt-4">
              <p><span className="font-semibold">Name:</span> {order.name}</p>
              <p><span className="font-semibold">Email:</span> {order.email}</p>
              <p><span className="font-semibold">Phone:</span> {order.phone}</p>
              <p><span className="font-semibold">Address:</span> {order.address}</p>
              <p><span className="font-semibold">Post Code:</span> {order.pcode}</p>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                order.status === 'pending' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'
              }`}>
                {order.status}
              </span>
              <span className="text-sm text-gray-400">Order Date: {new Date(order.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Order