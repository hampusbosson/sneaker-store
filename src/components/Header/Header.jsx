import sneakerLogo from "../../assets/images/sneaker-logo.png";
import icons from "../../assets/icons/icons";

function Header() {
  return (
    <div className="header flex justify-center">
      <div className="flex flex-row items-center justify-between max-w-screen-2xl w-11/12 pt-6">
        <div className="profile-btn w-10 h-10 flex items-center justify-center">
          {icons.userIcon}
        </div>
        <img src={sneakerLogo} alt="logo" className="sneaker-logo w-20 ml-56" />
        <div className="flex flex-row gap-4">
          <div className="search relative w-64 mx-0 -mr-12">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {icons.searchIcon}
            </div>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              className="border border-black rounded-3xl pl-9 w-48 h-9 text-black text-sm placeholder-gray-500 focus:outline-none mx-0"
            />
          </div>
          <div className="flex gap-2">
            {icons.heartIcon}
            {icons.cartIcon}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
