import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { getMostPopularSneakers, searchSneakers, getSneakerPrices } from './api';

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    searchSneakers("popular") // Example search for "Jordan" sneakers
      .then((data) => {
        setSneakers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="app h-screen">
      <Header />
      <div className="sneakers-list">
        {sneakers.map((sneaker) => (
          <div key={sneaker._id} className="sneaker-item">
            <h2>{sneaker.shoeName}</h2>
            <img src={sneaker.thumbnail} alt={sneaker.shoeName} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
