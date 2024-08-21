import icons from "../../assets/icons/icons";
import CartItem from "./CartItem";
import { useContext } from 'react';
import { CartContext } from '../CartProvider';


function CartDialog({ isOpen, onClose }) {
  const { cartItems } = useContext(CartContext);
  
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      <dialog
        open
        className="fixed top-0 right-0 h-screen w-[29rem] z-10 bg-white shadow-lg m-0"
        style={{ inset: "0 0 0 auto" }}
      >
        <div className="flex flex-col p-4 gap-6">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <button onClick={onClose}>{icons.closeIcon}</button>
          </div>
          {cartItems.map((item, index) => (
            <CartItem 
              key={index}
              brand={item.brand} 
              name={item.name} 
              size={item.size}
              price={item.price} 
              img={item.img}
              alt={item.imgAlt}
            />
          ))}
        </div>
      </dialog>
    </>
  );
}


export default CartDialog;
