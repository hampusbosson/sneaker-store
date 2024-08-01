import icons from '../../assets/icons/icons';

function ProfileButton() {
    return (
      <div className="profile-btn w-10 h-10 flex items-center justify-center">
        <div className='hidden md:block'>
          {icons.userIcon}
        </div>
        <div className="block md:hidden">
          {icons.barsIcon}
        </div>
      </div>
    );
  }
  
  export default ProfileButton;