import NewArrivalsContainer from "./NewArrivalsContainer";
import ShowcaseContainer from "./ShowcaseContainer";

function MainContent() {
    return (
        <div className="flex flex-col gap-12">
            < ShowcaseContainer />
            < NewArrivalsContainer />
        </div>
    )
}

export default MainContent;