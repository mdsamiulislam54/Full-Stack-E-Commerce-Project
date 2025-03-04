import { useEffect, useState } from "react";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [products1, setProducts1] = useState([]);

  useEffect(() => {
    const productsFetch = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/products/data", );
        const data = await response.data;
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    productsFetch();
  }, []);

  useEffect(() => {
      if(products.length > 0) {
        const shuffled = [...products].sort(()=>0.5 - Math.random());
        setProducts1(shuffled.slice(20,30));
      }
  }, [products]);



  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-2xl text-center mb-8">Products</h1>
        <div className="grid grid-cols-4 gap-3 ">
          {products1.map((product, index) => {
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
