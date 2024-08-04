import ContentButton from "./ContentButton";

function HeaderContentList() {
    return (
        <div className="flex flex-row gap-12 flex-wrap justify-center items-center"> 
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
        </div>
    );
}

export default HeaderContentList;