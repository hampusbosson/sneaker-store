import icons from '../../assets/icons/icons';
import { useState } from 'react';
import CartDialog from '../Cart/CartDialog';

function CartButton() {
  const [cartCount, setCartCount] = useState(0);
  const [cartIsEmpty, setCartIsEmpty] = useState(true);

  const handleClick = () => {
    setCartOpen(true)
  }

  const handleClose = () => {
    setCartOpen(false);
  };

  const [cartOpen, setCartOpen] = useState(null);

  return (
    <>
      <button onClick={handleClick}>
        {icons.cartIcon(cartCount)}
      </button>
      <CartDialog isOpen={cartOpen} onClose={handleClose} cartCount={cartCount} setCartCount={setCartCount} isEmpty={cartIsEmpty} setIsEmpty={setCartIsEmpty}/>
    </>
  );
}

export default CartButton;