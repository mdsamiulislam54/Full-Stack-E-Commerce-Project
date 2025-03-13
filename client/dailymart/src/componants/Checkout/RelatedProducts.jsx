import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";

const RelatedProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  return (
    <div>
      <h1 className="text-center py-7 text-3xl tracking-wide font-medium">Related Products</h1>
      <div className="grid  grid-cols-1 gap-5 sm:grid-cols-4">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          products.slice(0, 4).map((product) => (
            <div key={product.id} className=" hover:shadow-lg transition-all duration-300 p-2 shadow cursor-pointer">
              <img
                src={product.img}
                alt={product.title}
                className="w-50 h-50 object-contain mx-auto"
              />
              <h2 className="text-xl py-2">{product.title}</h2>
              <p className="font-dm-snas font-bold">{product.price}</p>
              <button className="bg-primary px-5 py-1 text-light my-4 hover:bg-secondary transition-all duration-300 cursor-pointer" onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
