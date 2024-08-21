import icons from "../../assets/icons/icons";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../CartProvider";

function CartItem({ brand, name, size, price, img, alt, amount }) {
  const { cartItems, setCartItems, setTotalPrice } = useContext(CartContext);

  const [productCounter, setProductCounter] = useState(amount);

  useEffect(() => {
    // Whenever productCounter changes, update the cart state
    const updatedCartItems = cartItems.map(item =>
      item.name === name && item.size === size
        ? { ...item, amount: productCounter }
        : item
    );
    setCartItems(updatedCartItems);
  }, [productCounter, name, size, cartItems, setCartItems]);

  const increaseProductCounter = () => {
    setProductCounter(prevCount => prevCount + 1);
    setTotalPrice(prevTotal => prevTotal + price);
  };

  const decreaseProductCounter = () => {
    if (productCounter > 0) {
      setProductCounter(prevCount => prevCount - 1);
      setTotalPrice(prevTotal => prevTotal - price);
    }
  };

  if (productCounter === 0) {
    return null; // Return null to hide the item when the amount is 0
  }

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
              <div onClick={decreaseProductCounter}>
                {icons.productMinusIconCart}
              </div>
              <div className="bg-white rounded px-1">{productCounter}</div>
              <div onClick={increaseProductCounter}>
                {icons.productPlusIconCart}
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default CartItem;