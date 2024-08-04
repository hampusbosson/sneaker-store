import ContentButton from "./ContentButton";

function HeaderContentList() {
    return (
        <div className="hidden lg:flex items-center justify-center w-full">
            <ul className="flex flex-row gap-x-12 gap-y-6 flex-wrap justify-center items-center w-10/12"> 
                <ContentButton name = {'Shop All'}/>
                <ContentButton name = {'New arrivals'}/>
                <ContentButton name = {'Nike Dunk'}/>
                <ContentButton name = {'Footwear'}/>
                <ContentButton name = {'Apparel'}/>
                <ContentButton name = {'Accesories'}/>
                <ContentButton name = {'Blogs'}/>
                <ContentButton name = {'Brands'}/>
                <ContentButton name = {'Releases'}/>
                <ContentButton name = {'Super Sale'}/>
            </ul>
        </div>
    );
}

export default HeaderContentList;