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
import { AllProducts } from './componants/AllProducts/AllProducts';
import BuyNow from './componants/BuyNow/BuyNow';
import SuccessPayment from './componants/SuccessPayment/SuccessPayment';
import Wishlist from './componants/UserDashboard/Wishlist';
import Blogs from './componants/Blogs/Blogs';
import ReadPage from './componants/Blogs/ReadPage';

function App() {
  return (

      <BrowserRouter>
      <Suspense fallback={<Loader/>}>
     
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="/buynow" element={<BuyNow />} />
          <Route path="/wishlists" element={<Wishlist />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/readPage" element={<ReadPage />} />
          
          {/* Dynamic route for success payment */}
          <Route path="/payment-success/:tran_id" element={<SuccessPayment />} />


        </Routes>
        
       
        <Footer />
        </Suspense>
      </BrowserRouter>

  );
}

export default App;
