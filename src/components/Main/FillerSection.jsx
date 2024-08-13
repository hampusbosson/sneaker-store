import ShowCaseButton from "./ShowCaseButton";
import CarouselButton from "./CarouselButton";
import newBalanceImage from "../../assets/images/new-balance.webp";

function FillerSection({ data, error, loading }) {
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
    <div className="flex justify-center w-full mt-10 md:px-6">
      <div className="grid grid-cols-2 grid-rows-2 md:gap-4 gap-6 w-[96rem] mx-4">
        <ShowCaseButton
          imgSrc={newBalanceImage}
          alt={"new-balance-img"}
          gridClass={
            "md:order-2 order-1 md:row-span-2 md:col-span-1 row-span-1 col-span-2 md:mx-2 "
          }
        />
        <div className="grid grid-cols-2 grid-rows-2 md:order-1 order-2 md:row-span-2 md:col-span-1 row-span-1 col-span-2 gap-8 mx-1">
          {data.map((sneaker) => (
            <div key={sneaker._id}>
              <CarouselButton
                imgSrc={sneaker.thumbnail}
                alt={sneaker.shoeName}
                brand={sneaker.brand}
                name={sneaker.make}
                price={sneaker.lowestResellPrice.stockX}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FillerSection;
