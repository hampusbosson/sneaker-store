import icons from '../../assets/icons/icons';

function ProfileButton() {
    return (
      <div className="profile-btn w-10 h-10 flex items-center justify-center">
        <div className='hidden lg:block'>
          {icons.userIcon}
        </div>
        <div className="block lg:hidden">
          {icons.barsIcon}
        </div>
      </div>
    );
  }
  
  export default ProfileButton;