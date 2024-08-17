import Layout from "../../../Layout";
import { useLocation /*useParams*/ } from "react-router-dom";
import { useState, useEffect } from "react";
import icons from "../../../assets/icons/icons";
import { searchSneakers } from "../../../api";
import CarouselButton from "../../Main/CarouselButton";


function ProductShowcase({
  state,
  selectedSize,
  aboutIsExpanded,
  detailsIsExpanded,
  handleSizeClick,
  handleAboutSection,
  handleDetailsSection,
}) {
  function SizeButton({ size, isSelected, onClick }) {
    return (
      <button
        className={`border-black border w-[3.8rem] h-10 ${
          isSelected ? "bg-black text-white" : "bg-white text-black"
        }`}
        onClick={onClick}
      >
        {size}
      </button>
    );
  }

  return (
    <div className="lg:flex lg:flex-row lg:gap-20 lg:justify-between grid gap-8">
      <img
        src={state.imgSrc}
        alt={state.alt}
        className="w-[26rem] h-[17rem] shadow xl:w-[38rem] xl:h-[27rem] sm:w-[33rem] sm:h-[23rem]"
      />
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <p className="text-gray-800 text-xl">{state.brand}</p>
          {icons.productHeartIcon}
        </div>
        <div className="mt-2">
          <p className="text-3xl font-bold">{state.name}</p>
          <p className="font-semibold text-xl mt-0.5">{`$${state.price}`}</p>
        </div>
        <div className="flex gap-6 mt-6">
          <p className="font-bold text-lg">Shoe Size (UK)</p>
          <p className="font-semibold underline text-lg">Size Chart</p>
        </div>
        <div className="flex gap-2 mt-3">
          {["4", "5", "6", "7", "8"].map((size) => (
            <SizeButton
              key={size}
              size={size}
              isSelected={selectedSize === size}
              onClick={() => handleSizeClick(size)}
            />
          ))}
        </div>
        <button className="bg-black text-white mt-5 h-16 font-semibold text-lg">
          Add to cart
        </button>
        <button
          className="flex justify-between font-bold text-lg mt-6 border-b border-gray-400 pb-4"
          onClick={handleAboutSection}
        >
          <p>ABOUT PRODUCT</p>
          {aboutIsExpanded ? icons.productMinusIcon : icons.productPlusIcon}
        </button>
        {aboutIsExpanded && (
          <div className="font-medium text-lg mt-2 mb-4 lg:max-w-[21rem] md:max-w-[30rem] sm:max-w-[30rem] max-w-[26rem]">
            {state.description}
          </div>
        )}
        <button
          className="flex justify-between font-bold text-lg mt-4 border-b border-gray-400 pb-4"
          onClick={handleDetailsSection}
        >
          <p>PRODUCT DETAILS</p>
          {detailsIsExpanded ? icons.productMinusIcon : icons.productPlusIcon}
        </button>
        {detailsIsExpanded && (
          <div>
            <ul className="text-lg mt-2 lg:max-w-[21rem] md:max-w-[30rem] sm:max-w-[30rem] max-w-[26rem]">
              <li className="flex gap-1">
                <div className="font-bold">Manufacturer:</div>
                <div>{state.brand}</div>
              </li>
              <li className="flex gap-1">
                <div className="font-bold">Weight:</div>
                <div>1.20 KG</div>
              </li>
              <li className="flex gap-1">
                <div className="font-bold">Generic Name:</div>
                <div>Shoe</div>
              </li>
              <li className="flex gap-1">
                <div className="font-bold">Unit of Measurement:</div>
                <div>1 pair</div>
              </li>
              <li className="flex gap-1">
                <div className="font-bold">Release Date:</div>
                <div>{state.releaseDate}</div>
              </li>
              <li className="flex gap-1">
                <div className="font-bold">Colorway:</div>
                <div>{state.colorWay}</div>
              </li>
              <li className="flex gap-1">
                <div className="font-bold">Article Code:</div>
                <div>{state.articleCode}</div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function getRandomSneakers(sneakers, count) {
  const shuffled = sneakers.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function YouMayLikeSection({shoeName }) {
  const [recommendedSneakers, setRecommendedSneakers] = useState([]);
  const [recommendedLoading, setRecommendedLoading] = useState(true);
  const [recommendedError, setRecommendedError] = useState(null);

  useEffect(() => {
    searchSneakers(shoeName, 15)
      .then((data) => {
        const randomSneakers = getRandomSneakers(data, 4);
        setRecommendedSneakers(randomSneakers);
        setRecommendedLoading(false);
      })
      .catch((error) => {
        setRecommendedError(error);
        setRecommendedLoading(false);
      });
  }, [shoeName]);

  if (recommendedLoading) {
    return <div>Loading...</div>
  }

  if (recommendedError) {
    return <div>Oops! Couldnt fetch data.</div>
  }


  return (
    <div className="lg:w-[80%] w-[90%]">
      <h1 className="text-start ml-4 2xl:text-4xl text-3xl font-bold">
        You may also like
      </h1>
      <div className="grid lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2">
      {recommendedSneakers.map((sneaker) => (
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
  );
}

function ProductPage() {
  const { state } = useLocation();

  const [selectedSize, setSelectedSize] = useState("7");
  const [aboutIsExpanded, setAboutIsExpanded] = useState(null);
  const [detailsIsExpanded, setDetailsIsExpanded] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAboutSection = () => {
    setAboutIsExpanded((prev) => !prev);
    setDetailsIsExpanded(false);
  };

  const handleDetailsSection = () => {
    setDetailsIsExpanded((prev) => !prev);
    setAboutIsExpanded(false);
  };

  return (
    <Layout>
      <div className="flex flex-col gap-36 justify-center items-center text-black">
        <ProductShowcase
          state={state}
          selectedSize={selectedSize}
          aboutIsExpanded={aboutIsExpanded}
          detailsIsExpanded={detailsIsExpanded}
          handleSizeClick={handleSizeClick}
          handleAboutSection={handleAboutSection}
          handleDetailsSection={handleDetailsSection}
        />
        <YouMayLikeSection shoeName={state.brand} shoeID={state._id} />
      </div>
    </Layout>
  );
}

export default ProductPage;
