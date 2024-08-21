import icons from "../../assets/icons/icons";
import { useState } from "react";

function CartItem({ brand, name, size, price, img, alt }) {
  const [productCounter, setProductCounter] = useState("0");

  const increaseProductCounter = () => {
    let productCount = productCounter;
    productCount++;

    setProductCounter(productCount);
  };

  const decreaseProductCounter = () => {
    let productCount = productCounter;
    if (productCount > 0) {
      productCount--;
    }

    setProductCounter(productCount);
  };

  return (
    <div className="w-full border-b border-gray-300 pb-6">
      <button className="flex gap-4 w-full">
        <img className="w-36 shadow" src={img} alt={alt} />
        <div className="flex flex-col items-start w-full">
          <div className="text-gray-500 font-bold text-sm">{brand}</div>
          <div className="font-bold text-lg mt-1">{name}</div>
          <div className="font-bold text-sm">{`$${price}.00`}</div>
          <div className="flex justify-between w-full">
            <div className="mt-1 bg-gray-100 rounded px-2 pb-[0.15rem] pt-[0.15rem] font-bold">
              {`UK : ${size}`}
            </div>
            <div className="flex gap-2 bg-gray-100 rounded items-center justify-center">
              <button onClick={decreaseProductCounter}>
                {icons.productMinusIconCart}
              </button>
              <div className="bg-white rounded px-1">{productCounter}</div>
              <button onClick={increaseProductCounter}>
                {icons.productPlusIconCart}
              </button>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default CartItem;
