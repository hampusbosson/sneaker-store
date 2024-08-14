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

  const [selectedSize, setSelectedSize] = useState('7');

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center text-black">
        <div className="flex flex-row 2xl:w-[50%] w-[80%] justify-between">
          <img
            src={state.imgSrc}
            alt={state.alt}
            className="w-[40rem] shadow"
          />
          <div className="flex flex-col w-[27rem]">
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
            <button className="bg-black text-white mt-5 h-16 font-semibold text-lg">Add to cart</button>
            <button className="flex justify-between font-bold text-lg mt-6 border-b border-gray-400 pb-4">
                <p>ABOUT PRODUCT</p>
                {icons.productPlusIcon}
            </button>
            <button className="flex justify-between font-bold text-lg mt-4 border-b border-gray-400 pb-4">
                <p>PRODUCT DETAILS</p>
                {icons.productPlusIcon}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductPage;
