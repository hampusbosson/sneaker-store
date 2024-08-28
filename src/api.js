// src/api.js

// Fetch the most popular sneakers
export const getMostPopularSneakers = async () => {
  const response = await fetch("http://localhost:5001/api/sneakers");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Search for sneakers by keyword
export const searchSneakers = async (keyword, limit) => {
  const response = await fetch(
    `http://localhost:5001/api/sneakers/search?keyword=${keyword}&limit=${limit}`,
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Get sneaker prices by style ID
export const getSneakerPrices = async (styleID) => {
  const response = await fetch(
    `http://localhost:5001/api/sneakers/prices/${styleID}`,
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
