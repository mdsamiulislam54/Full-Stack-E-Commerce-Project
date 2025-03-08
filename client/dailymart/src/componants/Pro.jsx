import { useEffect, useState } from "react";

const Pro = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Shop.json");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // State to track the main image for each product
  const [mainImage, setMainImage] = useState({});

  // Function to update the main image on hover
  const handleHover = (pID, img) => {
    setMainImage((prev) => ({ ...prev, [pID]: img }));
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10">
        <div className="grid grid-cols-4 gap-4">
          {product.map((item) => (
            <div key={item.pID} className="flex flex-col gap-4 ">
              {/* Main Product Card */}
              <div className="p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300 h-100 relative ">
                {/* Main Image */}
                <img
                  src={mainImage[item.pID] || item.img} // Show hovered image or default main image
                  alt={item.title}
                  className=" h-90  object-contain mx-auto"
                />
                
                {/* Title */}
                
                
                {/* Price and Discount Price */}
                <h1>{item.pID}</h1>
           
            </div>

             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pro;