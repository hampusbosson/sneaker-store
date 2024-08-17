import Layout from "../../../Layout";
import { useLocation /*useParams*/ } from "react-router-dom";
import { useState } from "react";
import icons from "../../../assets/icons/icons";

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

function ProductPage() {
  const { state } = useLocation();
  //const { item } = useParams;

  const [selectedSize, setSelectedSize] = useState("7");
  const [aboutIsExpanded, setAboutIsExpanded] = useState(null);
  const [detailsIsExpanded, setDetailsIsExpanded] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAboutSection = () => {
    if (
      aboutIsExpanded === true
        ? setAboutIsExpanded(false)
        : setAboutIsExpanded(true), setDetailsIsExpanded(false)
    );
  };

  const handleDetailsSection = () => {
    if (
        detailsIsExpanded === true
          ? setDetailsIsExpanded(false)
          : setDetailsIsExpanded(true), setAboutIsExpanded(false)
      );
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center text-black">
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
            {aboutIsExpanded && <div className="font-medium text-lg mt-2 mb-4 lg:max-w-[21rem] md:max-w-[30rem] sm:max-w-[30rem] max-w-[26rem]">{state.description}</div>}
            <button className="flex justify-between font-bold text-lg mt-4 border-b border-gray-400 pb-4"
            onClick={handleDetailsSection}>
              <p>PRODUCT DETAILS</p>
              {detailsIsExpanded ? icons.productMinusIcon : icons.productPlusIcon}
            </button>
            {detailsIsExpanded && <div>
              <ul>
                <li>Manufacturer: {state.brand}</li>
                <li>Weight: 1.20 KG</li>
                <li>Generic Name: Shoe</li>
                <li>Unit of Measurement: 1 pair</li>
                <li>Release Date: </li>
                <li>Colorway: </li>
                <li>Article Code: </li>
              </ul>
              </div>}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductPage;
