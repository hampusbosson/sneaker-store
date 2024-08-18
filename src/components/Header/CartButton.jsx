import icons from '../../assets/icons/icons';
import { useState } from 'react';
import CartDialog from './CartDialog';

function CartButton() {
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
        {icons.cartIcon}
      </button>
      <CartDialog isOpen={cartOpen} onClose={handleClose} />
    </>
  );
}

export default CartButton;