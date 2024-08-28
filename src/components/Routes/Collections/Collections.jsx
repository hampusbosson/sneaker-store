import Layout from "../../../Layout";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CarouselButton from "../../Main/CarouselButton";
import { searchSneakers } from "../../../api";

function Collections() {
  const { state } = useLocation();

  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    searchSneakers(state.data, state.limit)
      .then((data) => {
        console.log(data);
        setSneakers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [state.data, state.limit]);

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
    <Layout>
      <div className="text-black">
        <h1>{state.title}</h1>
        <div>
        {sneakers.map((sneaker) => (
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
        </div>
      </div>
    </Layout>
  );
}

export default Collections;
