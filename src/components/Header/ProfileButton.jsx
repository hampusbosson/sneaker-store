import icons from '../../assets/icons/icons';
import MobileSidebar from './MobileSidebar';
import { useState } from 'react';

function ProfileButton() {

  const handleClick = () => {
    setCartOpen(true)
  }

  const handleClose = () => {
    setCartOpen(false);
  };

  const [cartOpen, setCartOpen] = useState(null);

    return (
      <div className="profile-btn w-10 h-10 flex items-center justify-center">
        <button className='hidden lg:block'>
          {icons.userIcon}
        </button>
        <button className="block lg:hidden" onClick={handleClick}>
          {icons.barsIcon}
        </button>
        <MobileSidebar isOpen={cartOpen} onClose={handleClose}/>
      </div>
    );
  }
  
  export default ProfileButton;