import { Link, useNavigate } from "react-router-dom";
import BannerImages from "../../assets/product-banner.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchProducts,
  setCategory,
  setRating,
} from "../../redux/features/filteredProducts";
import Loader from "../Loader/Loader";
import { CiWarning } from "react-icons/ci";
import { addToCart } from "../../redux/features/cartSlice";
import ShopCart from '../ShopCart/ShopCart'
import { addToCheckout } from "../../redux/features/checkoutSlice";


export const AllProducts = () => {
  const dispatch = useDispatch();

  const { filteredProducts, status, rating } = useSelector(
    (state) => state.filteredProducts
  );
const navigate = useNavigate()
  const [prev, setPrv] = useState(0);
  const [next, setNext] = useState(12);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleRatingChange = (ratingValue) => {
    if (rating === ratingValue) {
      dispatch(setRating(null));
    } else {
      dispatch(setRating(ratingValue));
    }
  };


  const filterSliceProducts = filteredProducts.slice(prev, next);
  const handlePrevBtn = () => {
    if (prev===0) return;
  
    setPrv((prev) => prev - 12);
    setNext((prev) => prev - 12);
  };
  const handleNextBtn = () => {
    if ( next >=filteredProducts.length) return;
  
    setNext((prev) => prev + 12);
    setPrv((prev) => prev + 12);
  };
  const handleCheckOut = (products) => {
    dispatch(addToCheckout(products));
    navigate('/checkout')
  }

  return (
    <>
      <div
        className="bg-cover h-64 bg-center w-full relative"
        style={{ backgroundImage: `url(${BannerImages})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000090]">
          <div className="flex flex-col justify-center items-center mt-14">
            <h1 className="sm:text-4xl text-3xl text-light mb-4 font-semibold tracking-wider">
              All Products
            </h1>
            <p className="sm:text-xl text-sm text-light mb-4 tracking-wider">
              Discover our wide range of products
            </p>
            <div className="flex gap-5 items-center text-light">
              <Link
                to={"/"}
                className="hover:text-gray-300 duration-300 transition-all text-sm sm:text-md "
              >
                Home {">"}
              </Link>
              <Link
                to={"/blog"}
                className="hover:text-gray-300 duration-300 transition-all text-sm sm:text-md"
              >
                blog {">"}
              </Link>
              <Link
                to={"/offer"}
                className="hover:text-gray-300 duration-300 transition-all text-sm sm:text-md"
              >
                Offer {">"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto">
        <div className="grid sm:grid-cols-4 gap-5 py-5">
          <div className="sm:col-span-1 sm:border-r-2 sm:border-gray-200 sm:pr-2">
            <div className="p-4 rounded-lg">
              <h2 className="text-lg font-bold mb-2">Filters</h2>

              {/* Category Filter */}
              <div className="mb-3">
                <h3 className="font-semibold">Category</h3>
                <select
                  onChange={(e) => dispatch(setCategory(e.target.value))}
                  className="w-full p-2 border rounded"
                >
                  <option>All</option>
                  <option>Men&apos;s Fashion</option>
                  <option>Women&apos;s Fashion</option>
                  <option>Kid&apos;s Fashion</option>
                  <option>Cell Phone</option>
                  <option>Footwear</option>
                </select>
              </div>

              {/* Rating */}
              <div className="mb-3">
                <h3 className="font-semibold">Rating</h3>
                <div>
                  <input
                    checked={rating === "4up"}
                    onChange={() => handleRatingChange("4up")}
                    type="checkbox"
                    id="4up"
                  />
                  <label htmlFor="4up"> ⭐⭐⭐⭐ & Up</label>
                </div>
                <div>
                  <input
                    checked={rating === "below4"}
                    onChange={() => handleRatingChange("below4")}
                    type="checkbox"
                    id="below4"
                  />
                  <label htmlFor="below4"> ⭐⭐⭐ & Up</label>
                </div>
              </div>

              {/* Apply & Reset Buttons */}
              <button className="w-full bg-primary text-white p-2 rounded mt-2">
                Apply Filters
              </button>
              <button
                onClick={() => dispatch(fetchProducts())}
                className="w-full bg-gray-300 p-2 rounded mt-2"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="sm:col-span-3">
            <div className="grid sm:grid-cols-3 gap-4">
              {status === "loading" ? (
                <div className="col-span-4 flex justify-center items-center top-50">
                  <Loader />
                </div>
              ) : status === "failed" ? (
                <div className="text-center">Error</div>
              ) : filterSliceProducts.length === 0 ? (
                <div
                
                className="flex flex-col col-span-4 items-center justify-center h-full py-20 bg-gray-100 rounded-lg shadow-md text-center">
                  <div className="mb-4">
                    <CiWarning size={100} />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-700">
                    No Products Found
                  </h2>
                  <p className="text-gray-500 mt-2">
                    Sorry, we couldn&apos;t find any products matching your search
                    criteria.
                  </p>
                  <button
                    onClick={() => dispatch(fetchProducts())}
                    className="mt-4 bg-secondary text-white px-6 py-2 rounded-lg cursor-pointer transition-all duration-300"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                filterSliceProducts.map((product) => (
                  <div 
                  
                  key={product._id} className="py-5 shadow cursor-pointer">
                    <img
                      src={product.img}
                      alt={product.title}
                      onClick={()=>handleCheckOut(product)}
                      className="w-48 h-48 object-contain mx-auto rounded-lg mb-3"
                    />
                    <div className="flex flex-col justify-between p-5 border-t border-gray-200">
                      <h3 className="font-medium tracking-wide mb-2">
                        {product.title}
                      </h3>
                      <h3 className="space-x-7">
                        <span>{product.review}</span>
                        <span className="text-xl font-dm-snas font-semibold">
                          {product.rating}
                        </span>
                      </h3>
                    </div>
                    <div className="flex items-center justify-between px-5 gap-3">
                      <p className="text-dark font-bold text-sm">
                        {product.discountPrice}
                      </p>
                      <p className="text-gray-500 text-sm line-through">
                        {product.price}
                      </p>
                      <button 
                      onClick={()=> dispatch(addToCart(product))}
                      className="text-sm font-light text-gray-800 border px-3 py-1 border-gray-300 rounded-sm cursor-pointer hover:bg-primary hover:text-light hover:border-light transition-all duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div>
              <div className="my-5 flex  justify-center gap-2 items-center">
                <button
                  disabled={filterSliceProducts.length === 0}
                  onClick={handlePrevBtn}
                  className=" px-3 py-1 border border-gray-300 rounded-md font-bold tracking-wide hover:border-light cursor-pointer hover:bg-primary hover:text-light transition-all duration-300"
                >
                  Prev
                </button>
                <button
                  onClick={handleNextBtn}
                  className=" px-3 py-1 border border-gray-300 rounded-md font-bold tracking-wide hover:border-light cursor-pointer hover:bg-primary hover:text-light transition-all duration-300"
                >
                  next
                </button>
              </div>
            </div>
          </div>
          <ShopCart/>
        </div>
      </div>
    </>
  );
};
