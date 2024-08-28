import ContentButton from "./ContentButton";
import { useNavigate } from "react-router-dom";

function HeaderContentList({ view }) {
    const navigate = useNavigate();

    const handleClick = (name, title, data, limit) => {
        const productData = { title, data, limit };
        navigate(`/collections/${name}`, { state: productData });
    };

    return (
        <div className={`${view === 'mobile' ? 'flex items-start justify-start' : 'hidden lg:flex items-center justify-center'} w-full `}>
            <ul className={`flex ${view === 'mobile' ? 'flex-col gap-4 pl-6' : 'flex-row gap-x-12 gap-y-6 flex-wrap justify-center items-center w-10/12'}`}>
                <ContentButton name='Shop All' onClick={() => handleClick('shop-all', 'Shop All', 'sneaker', 20)} />
                <ContentButton name='New arrivals' onClick={() => handleClick('new-arrivals', 'New Arrivals', 'adidas', 10)} />
                <ContentButton name='Nike Dunk' onClick={() => handleClick('nike-dunk', 'Nike Dunk', 'nike dunk', 10)} />
                <ContentButton name='Footwear' onClick={() => handleClick('footwear', 'Footwear')} />
                <ContentButton name='Apparel' onClick={() => handleClick('apparel', 'Apparel')} />
                <ContentButton name='Accesories' onClick={() => handleClick('accesories', 'Accesories')} />
                <ContentButton name='Blogs' onClick={() => handleClick('blogs', 'Blogs')} />
                <ContentButton name='Brands' onClick={() => handleClick('brands', 'Brands')} />
                <ContentButton name='Releases' onClick={() => handleClick('releases', 'Releases')} />
                <ContentButton name='Super Sale' onClick={() => handleClick('super-sale', 'Super sale')} />
            </ul>
        </div>
    );
}

export default HeaderContentList;