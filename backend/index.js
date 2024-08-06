/* eslint-disable no-undef */
const express = require('express');
const SneaksAPI = require('sneaks-api');
const cors = require('cors');

const app = express();
const sneaks = new SneaksAPI();

app.use(cors());

app.get('/api/sneakers', (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 25; // Change the default limit to 20 or any desired number

  sneaks.getMostPopular(limit, (err, products) => {
    if (err) {
      console.error('Error fetching popular sneakers:', err);
      res.status(500).json({ error: 'Could not fetch popular sneakers. Please try again later.' });
    } else {
      res.json(products);
    }
  });
});

app.get('/api/sneakers/search', (req, res) => {
  const keyword = req.query.keyword || 'Yeezy';
  const limit = 1;

  sneaks.getProducts(keyword, limit, (err, products) => {
    if (err) {
      console.error('Error searching for products:', err);
      res.status(500).json({ error: 'Could not search for products. Please try again later.' });
    } else {
      res.json(products);
    }
  });
});

app.get('/api/sneakers/prices/:styleID', (req, res) => {
  const styleID = req.params.styleID;

  sneaks.getProductPrices(styleID, (err, product) => {
    if (err) {
      console.error('Error fetching product prices:', err);
      res.status(500).json({ error: 'Could not fetch product prices. Please try again later.' });
    } else {
      res.json(product);
    }
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});