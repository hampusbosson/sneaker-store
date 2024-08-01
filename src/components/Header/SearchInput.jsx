import icons from '../../assets/icons/icons';

function SearchInput() {
  return (
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
  );
}

export default SearchInput;