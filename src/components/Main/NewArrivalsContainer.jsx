import { useState, useEffect } from "react";
import CarouselButton from "./CarouselButton";
import { getMostPopularSneakers } from "../../api";
import Slider from "react-slick";
import icons from "../../assets/icons/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NewArrivalsContainer() {
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

  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMostPopularSneakers()
      .then((data) => {
        console.log(data);
        setSneakers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

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
      <h2 className="text-black ml-48 text-4xl font-bold">New Arrivals</h2>
      <div>
        <div className="w-full px-40">
          <Slider {...sliderSettings}>
            {sneakers.map((sneaker) => (
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

export default NewArrivalsContainer;
