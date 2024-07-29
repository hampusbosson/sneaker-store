import sneakerLogo from '../assets/images/sneaker.png';
import icons from '../assets/icons/icons';

function Header() {
  return (
    <div className="header flex flex-row">
      <div className="profile-btn">{icons.user}</div>
      <img src={sneakerLogo} alt="logo" className="sneaker-logo w-40" />
      <div className="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className=""
        />
      </div>
    </div>
  );
}

export default Header;
