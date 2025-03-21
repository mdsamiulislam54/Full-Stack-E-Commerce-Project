import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";
import { addToCheckout } from "../../redux/features/checkoutSlice";
import { useNavigate } from "react-router-dom";

const RelatedProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-center py-7 text-3xl tracking-wide font-medium">
        Related Products
      </h1>
      <div className="grid  grid-cols-1 gap-5 sm:grid-cols-4">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          products.slice(0, 4).map((product) => (
            <div
              onClick={() => dispatch(addToCheckout(product))}
              key={product.id}
              className=" hover:shadow-lg transition-all duration-300 p-2 shadow cursor-pointer"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-50 h-50 object-contain mx-auto"
                loading="lazy"
              />
              <h2 className="text-xl py-2">{product.title}</h2>
              <p className="font-dm-snas font-bold">{product.price}</p>
              <button
                className="hover:bg-primary px-5 py-1 hover:text-light my-4 rounded-md border border-gray-400 text-dark transition-all duration-300 cursor-pointer"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
       
      </div>
      <div className="flex justify-end my-5  ">
          <button 
          onClick={()=>navigate('/allproducts')}
          className="px-10 p-1 border border-gray-300 font-dm-snas text-md font-semibold hover:bg-primary cursor-pointer transition-all duration-300 rounded-md hover:text-light">More</button>
        </div>
    </div>
  );
};

export default RelatedProducts;
