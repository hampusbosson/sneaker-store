import CarouselButton from "./CarouselButton";
import Slider from "react-slick";
import icons from "../../assets/icons/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselContainer({title, data, error, loading}) {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", marginTop: '-40px', marginRight: '10px' }}
        onClick={onClick}
      >
        {icons.chevronRight}
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", marginTop: '-40px' }}
        onClick={onClick}
      >
        {icons.chevronLeft}
      </div>
    );
  }

  function HideArrows(props) {
    const { className, style } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "hidden" }}
      >
      </div>
    );
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: <HideArrows />,
          prevArrow: <HideArrows />,
        }
      },
    ]
  };

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-4 text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center 2xl:px-44 sm:px-8 px-0 2xl:mb-0 sm:-mb-8 -mb-8">
      <h2 className="text-black 2xl:ml-[2rem] ml-[2rem] 2xl:text-4xl lg:text-3xl text-2xl font-bold">{title}</h2>
      <div>
        <div className="w-full">
          <Slider {...sliderSettings}>
            {data.map((sneaker) => (
              <div key={sneaker._id} className="p-4">
                <CarouselButton
                  imgSrc={sneaker.thumbnail}
                  alt={sneaker.shoeName}
                  brand={sneaker.brand}
                  name={sneaker.make}
                  price={sneaker.lowestResellPrice.stockX}
                  description={sneaker.description}
                  releaseDate={sneaker.releaseDate}
                  colorWay={sneaker.colorway}
                  articleCode={sneaker.styleID}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CarouselContainer;
