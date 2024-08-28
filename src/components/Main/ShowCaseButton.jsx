import { useNavigate } from "react-router-dom";

function ShowCaseButton({ imgSrc, alt, gridClass, name, url, title}) {
  const navigate = useNavigate();

  const handleClick = (name, title, data, limit) => {
      const productData = { title, data, limit };
      navigate(`/collections/${name}`, { state: productData });
  };

    return (
      <div className={gridClass}>
        <button className={`w-full h-full`} onClick={() => handleClick(url, title, name, 10)}>
          <img src={imgSrc} alt={alt} className="w-full h-full"/>
        </button>
      </div>
    );
  }
  
  export default ShowCaseButton;