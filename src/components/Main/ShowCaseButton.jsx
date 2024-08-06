function ShowCaseButton({ imgSrc, alt, gridClass}) {
    return (
      <div className={gridClass}>
        <button className={`w-full h-full`}>
          <img src={imgSrc} alt={alt} className="w-full h-full"/>
        </button>
      </div>
    );
  }
  
  export default ShowCaseButton;