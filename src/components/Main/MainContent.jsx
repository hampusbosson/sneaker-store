import CarouselContainer from "./CarouselContainer";
import ShowcaseContainer from "./ShowcaseContainer";
import FillerSection from "./FillerSection";
import { getMostPopularSneakers, searchSneakers } from "../../api";
import { useState, useEffect } from "react";


function MainContent() {
    const [popularSneakers, setPopularSneakers] = useState([]);
    const [popularLoading, setPopularLoading] = useState(true);
    const [popularError, setPopularError] = useState(null);

    const [recommendedSneakers, setRecommendedSneakers] = useState([]);
    const [recommendedLoading, setRecommendedLoading] = useState(true);
    const [recommendedError, setRecommendedError] = useState(null);

    const [newBalanceSneakers, setNewBalanceSneakers] = useState([]);
    const [newBalanceError, setNewBalanceError] = useState(null);
    const [newBalanceLoading, setNewBalanceLoading] = useState(null);

  
    useEffect(() => {
      getMostPopularSneakers()
        .then((data) => {
          setPopularSneakers(data);
          setPopularLoading(false);
        })
        .catch((error) => {
          setPopularError(error);
          setPopularLoading(false);
        });
    }, []);

    useEffect(() => {
        searchSneakers("2024", 10)
          .then((data) => {
            console.log(data)
            setRecommendedSneakers(data);
            setRecommendedLoading(false);
          })
          .catch((error) => {
            setRecommendedError(error);
            setRecommendedLoading(false);
          });
      }, []);

      useEffect(() => {
        searchSneakers("new balance 574", 4)
          .then((data) => {
            setNewBalanceSneakers(data);
            setNewBalanceLoading(false);
          })
          .catch((error) => {
            setNewBalanceError(error);
            setNewBalanceLoading(false);
          });
      }, []);

    return (
        <div className="flex flex-col gap-12">
            < ShowcaseContainer />
            < CarouselContainer title={'New Arrivals'} data={popularSneakers} error={popularError} loading={popularLoading}/>
            < CarouselContainer title={'We Recommend'} data={recommendedSneakers} error={recommendedError} loading={recommendedLoading}/>
            < FillerSection data={newBalanceSneakers} error={newBalanceError} loading={newBalanceLoading}/>
        </div>
    )
}

export default MainContent;