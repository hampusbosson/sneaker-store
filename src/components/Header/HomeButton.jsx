import sneakerLogo from '../../assets/images/sneaker-logo.png';

function HomeButton() {
    return (
        <img src={sneakerLogo} alt="logo" className="sneaker-logo w-16 md:ml-56 ml-10"/>
    )
}

export default HomeButton;