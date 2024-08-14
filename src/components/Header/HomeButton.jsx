import sneakerLogo from '../../assets/images/sneaker-logo.png';
import { Link } from 'react-router-dom';

function HomeButton() {
    return (
        <Link to="/">
        <img src={sneakerLogo} alt="logo" className="sneaker-logo w-16 md:ml-56 ml-10"/>
        </Link>
    )
}

export default HomeButton;