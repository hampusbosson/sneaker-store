import ContentButton from "./ContentButton";
import { useNavigate } from "react-router-dom";

function HeaderContentList() {
    const navigate = useNavigate();

    const handleClick = (name, title) => {
        const productData = { title };
        navigate(`/collections/${name}`, { state: productData });
    };

    return (
        <div className="hidden lg:flex items-center justify-center w-full">
            <ul className="flex flex-row gap-x-12 gap-y-6 flex-wrap justify-center items-center w-10/12"> 
                <ContentButton name='Shop All' onClick={() => handleClick('shop-all', 'Shop All')} />
                <ContentButton name='New arrivals' onClick={() => handleClick('new-arrivals', 'New Arrivals')} />
                <ContentButton name='Nike Dunk' onClick={() => handleClick('nike-dunk', 'Nike Dunk')} />
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