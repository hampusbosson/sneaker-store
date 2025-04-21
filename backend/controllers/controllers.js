import SneaksAPI from "sneaks-api";

const sneaks = new SneaksAPI();


const getSneakers = async (req, res) => {
    const limit = parseInt(req.query.limit, 10) || 25; 

  sneaks.getMostPopular(limit, (err, products) => {
    if (err) {
      console.error("Error fetching popular sneakers:", err);
      res
        .status(500)
        .json({
          error: "Could not fetch popular sneakers. Please try again later.",
        });
    } else {
      res.json(products);
    }
  });
}

const searchSneakers = async (req, res) => {
    const keyword = req.query.keyword || "Yeezy";
    const limit = parseInt(req.query.limit, 10) || 25; 
    
    sneaks.getProducts(keyword, limit, (err, products) => {
        if (err) {
        console.error("Error searching for products:", err);
        res
            .status(500)
            .json({
            error: "Could not search for products. Please try again later.",
            });
        } else {
        res.json(products);
        }
    });
}

const getSneakerPrices = async (req, res) => {
    const styleID = req.params.styleID;

    sneaks.getProductPrices(styleID, (err, product) => {
        if (err) {
        console.error("Error fetching product prices:", err);
        res
            .status(500)
            .json({
            error: "Could not fetch product prices. Please try again later.",
            });
        } else {
        res.json(product);
        }
    });
}

export { getSneakers, searchSneakers, getSneakerPrices };