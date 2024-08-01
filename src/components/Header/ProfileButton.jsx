import icons from '../../assets/icons/icons';

function ProfileButton() {
    return (
      <div className="profile-btn w-10 h-10 flex items-center justify-center">
        {icons.userIcon}
      </div>
    );
  }
  
  export default ProfileButton;