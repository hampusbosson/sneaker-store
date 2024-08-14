import icons from "../../assets/icons/icons";

function Info() {
  return (
    <div>
        <h1>INFO</h1>
      <div>
        <p>Contact Us</p>
        <p>Releases</p>
        <p>Stores</p>
        <p>Brands</p>
        <p>Blogs</p>
      </div>
    </div>
  );
}

function Policies() {
  return (
    <div>
        <h1>POLICIES</h1>
      <div>
        <p>Help Center</p>
        <p>Privacy Policy</p>
        <p>Returns & Exchange</p>
        <p>Terms & Conditions</p>
        <p>Order & Shipping</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
}

function Socials() {
  return (
    <div>
        <h1>OUR SOCIALS</h1>
        <div className="flex">
            {icons.instagramIcon}
            {icons.facebookIcon}
        </div>
    </div>
  );
}

function Newsletter() {
  return (
    <div>
        <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
        <div>
            <input type="text" placeholder="Email Address"/>
            <button>Subscribe</button>
        </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-black mt-12 flex flex-row justify-around p-16">
        <div className="flex gap-16">
            <Info />
            <Policies />
            <Socials />
        </div>
        <Newsletter />
    </div>
  )
}

export default Footer;
