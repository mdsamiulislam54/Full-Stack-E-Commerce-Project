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

const newData = [1,7,11,40,59,65,24];

const filteredProducts = products.filter((product) => newData.includes(product.pID));

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-2xl text-center mb-8">Products</h1>
        <div className="grid grid-cols-4 gap-3 ">
          {filteredProducts.map((product, index) => {
            return (
              <div key={index} className="bg-light relative border p-2 rounded-2xl">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-40  h-40 mx-auto object-contain  "
                />
                <div>
                  <h2 className="text-lg font-medium">{product.title}</h2>
                  <h2 className="text-lg font-medium">{product.productDetails.title}</h2>

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
