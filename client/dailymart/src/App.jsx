// Date: 03/18/2021
// Description: Main App component for the DailyMart application

// import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Layout from './Layout/Layout'
// import Home from './componants/Home/Home'
// import Login from './componants/Registration/Login'
// import Registration from './componants/Registration/Registration'
// import UserDashboard from './componants/UserDashboard/UserDashboard'
// import CartItem from './componants/CartItem/CartItem'
// import Checkout from './componants/Checkout/Checkout'
// import { AllProducts } from './componants/AllProducts/AllProducts'
// import Footer from './componants/Footer/Footer'
// import NotFound from './componants/PageNotFound/NotFound'
// import { Suspense } from 'react'

// function App() {
//   return (
//     < >
//     <Suspense fallback={<div>Loading...</div>}>
//       <BrowserRouter>
//         <Layout />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/registration" element={<Registration />} />
//           <Route path="/userDashboard" element={<UserDashboard />} />
//           <Route path="/cartItems" element={<CartItem />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="/allproducts" element={<AllProducts />} />

        
//           <Route path="*" element={<NotFound/>} />
            


//         </Routes>
//         <Footer/>
//       </BrowserRouter>

//       </Suspense>
//     </>
//   )
// }

// export default App
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Suspense, lazy } from 'react'
// import Loader from './componants/Loader/Loader'

// // Lazy load components
// const Layout = lazy(() => import('./Layout/Layout'))
// const Home = lazy(() => import('./componants/Home/Home'))
// const Login = lazy(() => import('./componants/Registration/Login'))
// const Registration = lazy(() => import('./componants/Registration/Registration'))
// const UserDashboard = lazy(() => import('./componants/UserDashboard/UserDashboard'))
// const CartItem = lazy(() => import('./componants/CartItem/CartItem'))
// const Checkout = lazy(() => import('./componants/Checkout/Checkout'))
// const AllProducts = lazy(() => import('./componants/AllProducts/AllProducts'))
// const Footer = lazy(() => import('./componants/Footer/Footer'))
// const NotFound = lazy(() => import('./componants/PageNotFound/NotFound'))

// function App() {
//   return (
//     <BrowserRouter>
//     <Suspense fallback={<Loader/>}>
    
//         <Layout />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/registration" element={<Registration />} />
//           <Route path="/userDashboard" element={<UserDashboard />} />
//           <Route path="/cartItems" element={<CartItem />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="/allproducts" element={<AllProducts />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//         <Footer />
   
//     </Suspense>
//     </BrowserRouter>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './Layout/Layout';
import Footer from './componants/Footer/Footer';
import Loader from './componants/Loader/Loader'; 


const Home = lazy(() => import('./componants/Home/Home'));

const UserDashboard = lazy(() => import('./componants/UserDashboard/UserDashboard'));

// Keep these non-lazy as they're likely small components
import Login from './componants/Registration/Login';
import Registration from './componants/Registration/Registration';
import CartItem from './componants/CartItem/CartItem';
import Checkout from './componants/Checkout/Checkout';
import NotFound from './componants/PageNotFound/NotFound';
import {AllProducts}  from './componants/AllProducts/AllProducts';

function App() {
  return (
    <Suspense fallback={<Loader />}> 
    <BrowserRouter>
     
      <Layout />
      
    
      <Routes>
        <Route path="/" element={
        
            <Home />
         
        } />
        
        <Route path="/allproducts" element={
  <Suspense fallback={<div>Loading...</div>}>
    <AllProducts />
  </Suspense>
} />
        
        <Route path="/userDashboard" element={
          <Suspense fallback={<Loader />}>
            <UserDashboard />
          </Suspense>
        } />

        {/* Non-lazy routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/cartItems" element={<CartItem />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer doesn't need suspense */}
      <Footer />
    
    </BrowserRouter>
    </Suspense>
  );
}

export default App;