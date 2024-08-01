import ProfileButton from './ProfileButton';
import SearchInput from './SearchInput';
import WatchListButton from './WatchListButton';
import CartButton from './CartButton'
import sneakerLogo from '../../assets/images/sneaker-logo.png';

function Header() {
  return (
    <div className="header flex justify-center">
      <div className="flex flex-row items-center justify-between max-w-screen-2xl w-11/12 pt-6">
        <ProfileButton />
        <img src={sneakerLogo} alt="logo" className="sneaker-logo w-16 md:ml-56 ml-10"/>
        <div className="flex flex-row gap-4 items-center">
          <SearchInput />
          <div className='flex gap-4'>
            <WatchListButton />
            <CartButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
