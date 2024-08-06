function CarouselButton({ imgSrc, alt, brand, name, colorWay, price }) {
    return (
      <div>
        <button className={`w-full h-full`}>
          <img src={imgSrc} alt={alt} className="w-full h-full"/>
            <p className="text-black">{brand}</p>
            <p className="text-black">{name}</p>
            <p className="text-black">{price}</p>
          <div>
          </div>
        </button>
      </div>
    );
  }
  
  export default CarouselButton;