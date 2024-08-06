import MainButton from "./ShowCaseButton";
import { getMostPopularSneakers } from "../../api";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NewArrivalsContainer() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    }

    const [sneakers, setSneakers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        getMostPopularSneakers() 
          .then((data) => {
            setSneakers(data);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      }, []);
    


    return (
        <div className="flex flex-col gap-4 justify-center ">
            <h2 className="text-black ml-48 text-4xl font-bold">New Arrivals</h2>
           <div>
                <div className="w-full px-56">
                    <Slider {...sliderSettings}>
                    {sneakers.map((sneaker) => (
                        <div key={sneaker._id} className="bg-black p-8">
                            < MainButton imgSrc={sneaker.thumbnail} alt={sneaker.shoeName} height='h-52'/>
                        </div>
                    ))}
                    </Slider>
                </div>
           </div>
        </div>
    )
}

export default NewArrivalsContainer;