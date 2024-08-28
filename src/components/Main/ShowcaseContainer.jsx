import ShowCaseButton from "./ShowCaseButton";
import silverJordansImg from "../../assets/images/silver_jordan_1.webp";
import adidasImg from "../../assets/images/adidas_originals.webp";
import sportyImg from "../../assets/images/sporty_rich.webp";

function ShowcaseContainer() {
  return (
    <div className="flex justify-center w-full">
      <div className="grid md:grid-cols-10 md:grid-rows-2 md:gap-4 grid-cols-2 grid-rows-10 gap-2 w-[100rem] mx-4">
        <ShowCaseButton
          imgSrc={silverJordansImg}
          alt={"jordans-img"}
          gridClass={"md:col-span-7 md:row-span-2 col-span-2 row-span-6"}
          name={"jordan one"}
          url={"jordan-1"}
          title={"Jordan 1"}
        />
        <ShowCaseButton
          imgSrc={adidasImg}
          alt={"adidas-img"}
          gridClass={"md:col-span-3 md:row-span-1 col-span-1 row-span-4"}
          name={"adidas sneaker"}
          url={"adidas-originals"}
          title={"Adidas Originals"}
        />
        <ShowCaseButton
          imgSrc={sportyImg}
          alt={"sporty-img"}
          gridClass={"md:col-span-3 md:row-span-1 col-span-1 row-span-4"}
          name={"sneaker"}
          url={"rizzoli"}
          title={"Rizzoli Collection"}
        />
      </div>
    </div>
  );
}

export default ShowcaseContainer;
