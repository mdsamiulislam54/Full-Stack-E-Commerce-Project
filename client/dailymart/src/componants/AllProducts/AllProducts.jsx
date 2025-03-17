import { Link } from "react-router-dom";
import BannerImages from "../../assets/product-banner.jpg";
import { fetshproducts } from "../../redux/features/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const AllProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetshproducts());
  }, [dispatch]);

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            maiores praesentium ratione, facere delectus repudiandae, officia
            commodi magnam impedit qui, fugit cupiditate quas odio harum
            necessitatibus blanditiis quis deserunt. Delectus.
          </div>
          <div className="sm:col-span-3">
            <div className="grid sm:grid-cols-3 gap-4">
              {
                loading? (
                  <div className="text-center">Loading...</div>
                ) : error? (
                  <div className="text-center">Error: {error.message}</div>
                ) : (
                  products.map((product) => (
                    <div key={product._id} className=" py-5 shadow  cursor-pointer">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-48 h-48 object-contain mx-auto rounded-lg mb-3"
                      />
                      <div className="flex flex-col justify-between p-5 border-t border-gray-200">
                        <h3 className="font-medium tracking-wide mb-2">
                          {product.title}
                        </h3>
                        <h3 className="space-x-7">
                          <span>{product.review}</span>
                          <span className="text-xl font-dm-snas font-semibold">{product.rating}</span>
                        </h3>
                       
                      </div>
                      <div className="flex items-center justify-between px-5 gap-3">
                      <p className="text-dark font-bold text-sm ">
                            {product.discountPrice}
                          </p>
                          <p className="text-gray-500 text-sm line-through">
                            {product.price}
                          </p>
                         
                          <button className="text-sm font-light text-gray-800 hover:text-gray-900 border p-1 border-gray-300 rounded-sm cursor-pointer hover:bg-secondary transition-all duration-300">
                            Add to Cart
                          </button>
                        </div>
                     
                    </div>
                   ) ))
                
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
