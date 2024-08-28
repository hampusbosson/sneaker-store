import icons from '../../assets/icons/icons';
import MobileSidebar from './MobileSidebar';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function ProfileButton() {

  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/account/login');
  } 

  const handleMenuClick = () => {
    setMenuOpen(true)
  }

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const [menuOpen, setMenuOpen] = useState(null);

    return (
      <div className="profile-btn w-10 h-10 flex items-center justify-center">
        <button className='hidden lg:block' onClick={handleUserClick}>
          {icons.userIcon}
        </button>
        <button className="block lg:hidden" onClick={handleMenuClick}>
          {icons.barsIcon}
        </button>
        <MobileSidebar isOpen={menuOpen} onClose={handleMenuClose}/>
      </div>
    );
  }
  
  export default ProfileButton;