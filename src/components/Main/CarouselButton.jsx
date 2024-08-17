import icons from "../../assets/icons/icons";
import { useNavigate } from "react-router-dom";

function CarouselButton({ imgSrc, alt, brand, name, price, description, releaseDate, colorWay, articleCode}) {
  const navigate = useNavigate();

  const handleClick = () => {
    const productData = { imgSrc, alt, brand, name, price, description, releaseDate, colorWay, articleCode };
    navigate(`/product/${name}`, { state: productData });
  };

    return (
      <div onClick={handleClick}>
        <button className="w-full flex flex-col shadow-lg gap-6 px-6 pb-1 pt-6 bg-white rounded-lg">
          <img src={imgSrc} alt={alt} className="w-full h-full mt-8"/>
          <div className="flex justify-between w-full">
            <div className="flex flex-col items-start text-left min-h-28 mt-8">
                <p className="text-gray-700 text-lg">{brand}</p>
                <p className="text-black font-bold text-sm tracking-tight">{name}</p>
                <p className="text-black text-lg mt-1">{`$${price}`}</p>
            </div>
            <div className="self-start mt-8">
                {icons.plusIcon}
            </div>
          </div>
        </button>
      </div>
    );
  }
  
  export default CarouselButton;