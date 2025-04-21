import Layout from "../../../Layout";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import CarouselButton from "../../Main/CarouselButton";
import { searchSneakers } from "../../../api";

function Collections() {
  const { state } = useLocation();

  const {
    data: sneakers,
    error,
    isLoading,
  } = useQuery(["sneakers", state.data, state.limit], () =>
    searchSneakers(state.data, state.limit),
  );
  
  if (error) {
    return (
      <div className="text-center mt-4 text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <Layout>
      <div className="text-black 2xl:mx-[12rem] xl:mx-[5rem] md:mx-[5rem] mx-[1rem] flex flex-col gap-4">
        <h1 className="font-bold text-4xl ml-6">{state.title}</h1>
        <div className="grid lg:grid-cols-3 grid-cols-2">
          {isLoading ? (<div className="text-center mt-4 text-black">Loading...</div>) : 
            (sneakers.map((sneaker) => (
              <div key={sneaker._id} className="xl:p-6 md:p-4 p-2">
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
            )))
          }

        </div>
      </div>
    </Layout>
  );
}

export default Collections;
