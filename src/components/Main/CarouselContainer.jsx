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
        style={{ ...style, display: "block", marginTop: '-40px' }}
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

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <div className="flex flex-col justify-center">
      <h2 className="text-black ml-48 text-4xl font-bold">{title}</h2>
      <div>
        <div className="w-full px-40">
          <Slider {...sliderSettings}>
            {data.map((sneaker) => (
              <div key={sneaker._id} className="p-8">
                <CarouselButton
                  imgSrc={sneaker.thumbnail}
                  alt={sneaker.shoeName}
                  brand={sneaker.brand}
                  name={sneaker.make}
                  price={sneaker.lowestResellPrice.stockX}
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
