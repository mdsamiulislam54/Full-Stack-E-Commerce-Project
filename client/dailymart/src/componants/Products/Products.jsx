import { useDispatch, useSelector } from "react-redux";
import { fetshproducts } from "../../redux/features/productsSlice";
import { useEffect } from "react";

const Products = () => {

const dispatch = useDispatch();
const { products, loading, error} = useSelector((state)=>state.products)
useEffect (()=>{
  dispatch(fetshproducts())
  
 
},[dispatch])
if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-2xl text-center mb-8">Products</h1>
        <div className="grid grid-cols-4 gap-3 ">
          {products.map((product, index) => {
            return (
              <div key={index} className="bg-light relative border p-2 rounded-2xl">
                <img
                  src={product.img}
                  alt={product.title}
                  className="max-w-full h-70 mx-auto  "
                />
                <div>
                  <h2 className="text-lg font-medium">{product.title}</h2>

                  <span className="text-xl font-bold">${product.price}</span>
                  <button className="bg-primary text-light py-2 px-4 rounded-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}

       
        </div>
        <button  className="bg-primary p-3 my-10">Next Button</button>
      </div>
    </div>
  );
};

export default Products;
