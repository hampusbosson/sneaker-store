import ProfileButton from './ProfileButton';
import SearchInput from './SearchInput';
import WatchListButton from './WatchListButton';
import CartButton from './CartButton'
import HomeButton from './HomeButton';
import HeaderContentList from './HeaderContentList/HeaderContentList';


function Header() {
  return (
    <div className="header flex flex-col items-center gap-8 pb-6 shadow">
      <div className="flex flex-row items-center justify-between max-w-screen-2xl w-11/12 pt-6">
        <ProfileButton />
        <HomeButton />
        <div className="flex flex-row gap-4 items-center">
          <SearchInput />
          <div className='flex gap-4'>
            <WatchListButton />
            <CartButton />
          </div>
        </div>
      </div>
      <HeaderContentList />
    </div>
  );
}

export default Header;
