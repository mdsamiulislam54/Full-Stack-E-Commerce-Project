import { useState } from "react";
import { useSelector } from "react-redux";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Checkout = () => {
  const { checkout } = useSelector((state) => state.checkout);
  const [images, setImages] = useState();
  const [selectionColor, setSelectionColor] = useState([]);
  console.log(Checkout);
  const allImages = checkout.flatMap((item) => [
    item.subimage1,
    item.subimage2,
    item.subimage3,
  ]);
  const handleClickImgaes = (img) => {
    setImages(img);
  };
const discountCalculation=(discount,price)=>{
    const priceMain = parseFloat(price.replace("$", ""));
    const discountPricemain = parseFloat(discount.replace("$", ""));
    if (isNaN(priceMain) || isNaN(discountPricemain) || priceMain === 0) {
      return "Invalid input";
    }
    const discountP = ((priceMain - discountPricemain) / priceMain) * 100;
    return discountP.toFixed();
}
const handleSelction= (index)=>{
   if(selectionColor.includes(index)){
       setSelectionColor(selectionColor.filter((i)=>i!==index));
   }else{
    setSelectionColor([...selectionColor, index])
   }
}
  console.log(images);
  return (
    <div className="bg-assent">
      <div className="w-11/12 mx-auto bg-light px-4">
        <div className="grid sm:grid-cols-3 gap-5 my-10">
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
          <div >
              {
                checkout.map((item) => {
                  return (
                    <div key={item._id} className="p-5 max-sm:flex flex-col justify-center items-center ">
                      <h3 className="sm:text-3xl text-xl tracking-wider max-sm:text-center">{item.productDetails.title}</h3>
                       
                        <div className="space-x-6 py-5">
                        <span className="border-r-2 pr-3 border-gray-200" >{item.review}</span>
                            <span className="font-dm-snas font-semibold tracking-wide" >Rating {item.rating} </span>
                        </div>
                        <p className="text-sm mb-5 text-gray-600">Brand : <span className="text-primary font-medium tracking-wide">{item.brand}</span></p>
                        <div>
                            <p> <span className="font-semibold text-2xl tracking-wider ">{item.discountPrice}</span></p>
                            <p className="flex gap-5 items-center">
                                <span className="text-gray-600 line-through">{item.price}</span>
                                <span className="text-xl font-dm-snas font-semibold text-primary">-{discountCalculation(item.discountPrice, item.price)}%</span>
                            </p>
                        </div>
                        <div>
                            {
                                (item.size || []).map((size, i) =>{
                                    return (
                                        <div key={i} className="flex gap-2 items-center text-sm">
                                            <span>{size}</span>
                                            
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="flex gap-4 mt-4 ">
                            {
                                (item.color || []).map((size, i) =>{
                                    return (
                                        <div key={i} className={ ` p-1  cursor-pointer tracking-wide shadow items-center text-sm rounded ${
                                            selectionColor.includes(i) ?' bg-primary text-light':'bg-light'
                                        } `}
                                        onClick={()=>handleSelction(i)}
                                        >
                                            <button className="text-sm tracking-wider font-bold cursor-pointer " >{size}</button>
                                            
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="mt-10 flex gap-5">
                            <button>Add To cart</button>
                            <button>Buy Now</button>
                        </div>
                    </div>
                  );
                })
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
