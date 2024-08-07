import CarouselContainer from "./CarouselContainer";
import ShowcaseContainer from "./ShowcaseContainer";
import { getMostPopularSneakers } from "../../api";
import { useState, useEffect } from "react";


function MainContent() {
    const [sneakers, setSneakers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      getMostPopularSneakers()
        .then((data) => {
          console.log(data);
          setSneakers(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, []);

    return (
        <div className="flex flex-col gap-12">
            < ShowcaseContainer />
            < CarouselContainer title={'New Arrivals'} data={sneakers} error={error} loading={loading}/>
        </div>
    )
}

export default MainContent;