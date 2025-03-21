// Date: 03/18/2021
// Description: Main App component for the DailyMart application

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './componants/Home/Home'
import Login from './componants/Registration/Login'
import Registration from './componants/Registration/Registration'
import UserDashboard from './componants/UserDashboard/UserDashboard'
import CartItem from './componants/CartItem/CartItem'
import Checkout from './componants/Checkout/Checkout'
import { AllProducts } from './componants/AllProducts/AllProducts'
import Footer from './componants/Footer/Footer'
import NotFound from './componants/PageNotFound/NotFound'

function App() {
  return (
    < >
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/cartItems" element={<CartItem />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/allproducts" element={<AllProducts />} />

        
          <Route path="*" element={<NotFound/>} />
            


        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
