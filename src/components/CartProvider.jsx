import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, totalPrice, setTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider