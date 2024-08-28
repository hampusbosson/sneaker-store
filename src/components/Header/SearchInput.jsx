import icons from "../../assets/icons/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchInput() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const productData = {
      title: `Search result for: ${inputValue}`,
      data: inputValue,
      limit: 10,
    };
    navigate(`/collections/${inputValue}`, { state: productData });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="search relative w-64 mx-0 -mr-12 hidden md:block">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {icons.searchIcon}
      </div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
        className="border border-black rounded-3xl pl-9 w-48 h-9 text-black text-sm placeholder-gray-500 focus:outline-none mx-0"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default SearchInput;
