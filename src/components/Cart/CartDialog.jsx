import icons from "../../assets/icons/icons";
import CartItem from "./CartItem";
import { useContext, useEffect } from "react";
import { CartContext } from "../CartProvider";

function CartDialog({ isOpen, onClose }) {
  const { cartItems, totalPrice } = useContext(CartContext);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleDialogClick = (e) => {
    e.stopPropagation(); // Prevent click inside the dialog from closing it
  };

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={handleOverlayClick}></div>
      <dialog
        open
        className="fixed top-0 right-0 h-screen w-[29rem] z-10 bg-white shadow-lg m-0 flex flex-col p-4"
        style={{ inset: "0 0 0 auto" }}
        onClick={handleDialogClick}
      >
        <div className="flex flex-col gap-6 overflow-y-auto max-h-[90%]">
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
              amount={item.amount}
            />
          ))}
        </div>
        <div className="grid grid-cols-5 grid-rows-1 justify-end items-end w-full mt-auto pt-4 border-t border-gray-200">
          <div className="col-span-2 flex flex-col text-xl">
            <div className="font-bold">
              {`$${totalPrice}.00`}
            </div>
            <div className="text-sm font-semibold text-gray-500">
              Inclusive of all taxes
            </div>
          </div>
          <button className="col-span-3 bg-black text-white p-2 font-bold text-xl">
            CHECKOUT
          </button>
        </div>
      </dialog>
    </>
  );
}

export default CartDialog;
