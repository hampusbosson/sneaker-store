import CarouselContainer from "./CarouselContainer";
import ShowcaseContainer from "./ShowcaseContainer";
import FillerSection from "./FillerSection";
import { getMostPopularSneakers, searchSneakers } from "../../api";
import { useQuery } from "react-query";

function MainContent() {
  const {
    data: popularSneakers,
    error: popularError,
    isLoading: popularLoading,
  } = useQuery(["popularSneakers"], getMostPopularSneakers);

  const {
    data: recommendedSneakers,
    error: recommendedError,
    isLoading: recommendedLoading,
  } = useQuery(["recommendedSneakers"], () => searchSneakers("2024", 10));

  const {
    data: newBalanceSneakers,
    error: newBalanceError,
    isLoading: newBalanceLoading,
  } = useQuery(["newBalanceSneakers"], () =>
    searchSneakers("new balance 574", 4),
  );

  return (
    <div className="flex flex-col gap-12">
      <ShowcaseContainer />
      <CarouselContainer
        title={"New Arrivals"}
        data={popularSneakers}
        error={popularError}
        loading={popularLoading}
      />
      <CarouselContainer
        title={"We Recommend"}
        data={recommendedSneakers}
        error={recommendedError}
        loading={recommendedLoading}
      />
      <FillerSection
        data={newBalanceSneakers}
        error={newBalanceError}
        loading={newBalanceLoading}
      />
    </div>
  );
}

export default MainContent;
