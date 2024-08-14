import icons from "../../assets/icons/icons";
import FooterButton from "./FooterButton";

function Info() {
  return (
    <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl">INFO</h1>
      <div className="flex flex-col gap-2">
        <FooterButton title={'Contact Us'}/>
        <FooterButton title={'Releases'}/>
        <FooterButton title={'Stores'}/>
        <FooterButton title={'Brands'}/>
        <FooterButton title={'Blogs'}/>
      </div>
    </div>
  );
}

function Policies() {
    return (
      <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl">POLICIES</h1>
        <div className="flex flex-col gap-2">
          <FooterButton title={'Help Center'}/>
          <FooterButton title={'Privacy Policy'}/>
          <FooterButton title={'Returns & Exchange'}/>
          <FooterButton title={'Terms & Conditions'}/>
          <FooterButton title={'Order & Shipping'}/>
          <FooterButton title={'Terms of Service'}/>
        </div>
      </div>
    );
  }

function Socials() {
  return (
    <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl">OUR SOCIALS</h1>
        <div className="flex gap-4">
            {icons.instagramIcon}
            {icons.facebookIcon}
        </div>
    </div>
  );
}


function Newsletter() {
  return (
    <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl">SUBSCRIBE TO OUR NEWSLETTER</h1>
        <div>
            <input type="email" placeholder="Email Address" className="p-3 pr-16 focus:outline-none text-black placeholder-gray-500"/>
            <button className="bg-black font-semibold p-3 px-8">Subscribe</button>
        </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-stone-950 mt-12 pt-12 pb-24 grid lg:grid-cols-5 lg:grid-rows-1">
        <div className="lg:col-span-3 flex justify-evenly w-full ">
            <Info />
            <Policies />
            <Socials />
        </div>
        <div className="lg:col-span-2 flex lg:ml-32 lg:mt-0 lg:justify-start justify-center mt-16">
            <Newsletter />
        </div>
    </div>
  )
}

export default Footer;
