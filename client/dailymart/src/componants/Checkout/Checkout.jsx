import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ShopCart from "../ShopCart/ShopCart";
import RelatedProducts from "./RelatedProducts";

const Checkout = () => {
  const { checkout } = useSelector((state) => state.checkout);
  const [images, setImages] = useState();
  const [selectionColor, setSelectionColor] = useState([]);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const allImages = checkout.flatMap((item) => [
    item.subimage1,
    item.subimage2,
    item.subimage3,
  ]);
  const handleClickImgaes = (img) => {
    setImages(img);
  };
  const discountCalculation = (discount, price) => {
    const priceMain = parseFloat(price.replace("$", ""));
    const discountPricemain = parseFloat(discount.replace("$", ""));
    if (isNaN(priceMain) || isNaN(discountPricemain) || priceMain === 0) {
      return "Invalid input";
    }
    const discountP = ((priceMain - discountPricemain) / priceMain) * 100;
    return discountP.toFixed();
  };
  const handleSelction = (index) => {
    if (selectionColor.includes(index)) {
      setSelectionColor(selectionColor.filter((i) => i !== index));
    } else {
      setSelectionColor([...selectionColor, index]);
    }
  };
  const handelIncrement = () => {
    setCount(count + 1);
  };
  const handelDecrement = () => {
    setCount(count - 1);
  };
 
  return (
    <div className="bg-light">
      <div className="w-11/12 mx-auto bg-light px-4">
        <div className="grid sm:grid-cols-3 gap-5 my-10 border-b-2  pb-10 border-gray-200">
          <div className="flex flex-col-reverse justify-between gap-4  ">
            <div className="flex justify-center gap-5 ">
              {allImages.map((item) => {
                return (
                  <div key={item} className="shadow">
                    <img
                      onMouseEnter={() => handleClickImgaes(item)}
                      src={item}
                      alt=""
                      className="w-20 h-20 object-contain m-5 cursor-pointer transition-all duration-300 "
                    />
                  </div>
                );
              })}
            </div>
            <div className="bg-light ">
              {checkout.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="flex justify-center items-center shadow overflow-hidden"
                  >
                    <TransformWrapper>
                      <TransformComponent>
                        <img
                          src={images || item.img}
                          alt=""
                          className="bg-light p-5 w-100 h-100 object-contain hover:scale-200 hover:cursor-zoom-in "
                        />
                      </TransformComponent>
                    </TransformWrapper>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            {checkout.map((item) => {
              return (
                <div
                  key={item._id}
                  className="p-5 max-sm:flex flex-col justify-center items-center "
                >
                  <h3 className="sm:text-3xl text-xl tracking-wider max-sm:text-center">
                    {item.productDetails.title}
                  </h3>

                  <div className="space-x-6 py-5">
                    <span className="border-r-2 pr-3 border-gray-200">
                      {item.review}
                    </span>
                    <span className="font-dm-snas font-semibold tracking-wide">
                      Rating {item.rating}{" "}
                    </span>
                  </div>
                  <p className="text-sm mb-5 text-gray-600">
                    Brand :{" "}
                    <span className="text-primary font-medium tracking-wide">
                      {item.brand}
                    </span>
                  </p>
                  <div>
                    <p>
                      {" "}
                      <span className="font-semibold text-2xl tracking-wider ">
                        {item.discountPrice}
                      </span>
                    </p>
                    <p className="flex gap-5 items-center">
                      <span className="text-gray-600 line-through">
                        {item.price}
                      </span>
                      <span className="text-xl font-dm-snas font-semibold text-secondary">
                        -{discountCalculation(item.discountPrice, item.price)}%
                      </span>
                    </p>
                  </div>
                  <div>
                    {(item.size || []).map((size, i) => {
                      return (
                        <div
                          key={i}
                          className="flex gap-2 items-center text-sm"
                        >
                          <span>{size}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex gap-4 mt-4 ">
                    {(item.color || []).map((size, i) => {
                      return (
                        <div
                          key={i}
                          className={` p-1  cursor-pointer tracking-wide shadow items-center text-sm rounded ${
                            selectionColor.includes(i)
                              ? " bg-secondary text-dark"
                              : "bg-light"
                          } `}
                          onClick={() => handleSelction(i)}
                        >
                          <button className="text-sm tracking-wider font-bold cursor-pointer ">
                            {size}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex items-center gap-5 mt-5">
                    <button
                      onClick={handelDecrement}
                      className={`px-2 font-dm-snas font-bold cursor-pointer bg-gray-100 rounded `}
                      disabled={count === 0}
                    >
                      -
                    </button>
                    <span className="font-bold">{count}</span>
                    <button
                      onClick={handelIncrement}
                      className="px-2 font-dm-snas font-bold cursor-pointer bg-gray-100 rounded"
                    >
                      +
                    </button>
                  </div>
                  <div className="mt-8 flex gap-10">
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="px-10 py-2 bg-primary text-light rounded-lg  transition-all duration-500 cursor-pointer hover:bg-secondary hover:text-dark"
                    >
                      Add To Cart
                    </button>
                    <button className="px-12 py-2 bg-secondary text-light rounded-lg  transition-all duration-300 cursor-pointer  hover:bg-primary hover:text-light">
                      Buy Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          {checkout.map((item) => {
            return (
              <div
                key={item._id}
                className="p-5 max-sm:flex flex-col justify-center items-center "
              >
                <h3 className="sm:text-4xl font-dm-snas font-medium text-xl tracking-wider max-sm:text-center">
                  {item.productDetails.title}
                </h3>
                <div className="space-x-6 py-5">
                  <p className="sm:w-6/12 text-sm tracking-wide text-center sm:text-xl sm:text-start">
                    {item.description}
                  </p>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-4 sm:w-5/12 ">
                    {(item.productDetails.features || []).map((feture, i) => {
                      return (
                        <div key={i}>
                          <li className="text-sm tracking-wide sm:text-lg font-dm-snas font-medium list-disc">
                            {feture}
                          </li>
                        </div>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-3 my-10 border-t-2  pt-5 border-gray-200">
                      {
                        allImages.map((img)=>{
                          return(
                            <img key={img} src={img} alt="" />
                          )
              
                        })
                      }
                  </div>
                  <RelatedProducts/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ShopCart />
    </div>
  );
};

export default Checkout;
