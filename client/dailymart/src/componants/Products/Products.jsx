import { useDispatch, useSelector } from "react-redux";
import { fetshproducts } from "../../redux/features/productsSlice";
import { useEffect } from "react";
import { CiShoppingCart, CiHeart, CiSearch } from "react-icons/ci";
import { HiMiniArrowPath } from "react-icons/hi2";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetshproducts());
  }, [dispatch]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const sliceProducts = products.slice(0, 12);
  const discountCalculation = (price, discountPrice) => {
    const priceMain = parseFloat(price.replace("$", ""));
    const discountPricemain = parseFloat(discountPrice.replace("$", ""));
    console.log(
      "Parsed Price:",
      priceMain,
      "Parsed Discount Price:",
      discountPricemain
    );
    if (isNaN(priceMain) || isNaN(discountPricemain) || priceMain === 0) {
      return "Invalid input";
    }
    const discount = ((priceMain - discountPricemain) / priceMain) * 100;
    return discount.toFixed();
  };
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="sm:text-2xl text-xl my-8">Just For You</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 ">
          {sliceProducts.map((product, index) => {
            return (
              <div key={index} className="bg-light shadow p-4  relative overflow-hidden">
                <div className="mycart mb-2">
                  <img
                    src={product.img}
                    alt={product.title}
                    loading="lazy"
                    className="w-30 sm:w-40 sm:h-40 h-30 mx-auto object-contain  "
                  />
                  <span className="absolute top-1 left-1 z-30  bg-secondary py-0.5 px-2 text-sm text-light rounded">
                    -{discountCalculation(product.price, product.discountPrice)}
                    %
                  </span>
                  <div className="absolute sm:bottom-28 bottom-34  left-0  addcart">
                    <div className="">
                     
                      <CiHeart
                        size={25}
                        className="hover:text-secondary hover:ml-1 cursor-pointer transition-all duration-300"
                      />
                      <HiMiniArrowPath
                        size={25}
                        className="hover:text-secondary hover:ml-1 cursor-pointer transition-all duration-300"
                      />
                      <CiSearch
                        size={25}
                        className="hover:text-secondary hover:ml-1 cursor-pointer transition-all duration-300"
                      />
                       <CiShoppingCart
                        size={25}
                        className="hover:text-secondary hover:ml-1 cursor-pointer transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden">
                  <h2 className="sm:text-lg font-medium">{product.title}</h2>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span>{product.review}</span>
                      <span className="font-dm-snas font-bold tracking-wider">
                        {product.rating}
                      </span>
                    </div>
                    <div className="flex gap-5 items-center">
                      <span className="sm:text-lg font-dm-snas font-bold">
                        {product.discountPrice}
                      </span>
                      <span className="text-md font-dm-snas text-gray-600 line-through font-bold">
                        {product.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
       <div className="flex justify-center items-center ">
       <button className=" border-2 border-primary px-10 py-2 rounded text-dark text-lg font-bold  tracking-wider cursor-pointer my-10 hover:bg-secondary hover:border-secondary transition-all duration-300 ">Load More</button>
       </div>
      </div>
    </div>
  );
};

export default Products;
