import express from "express";
import { getSneakers, getSneakerPrices, searchSneakers } from "../controllers/controllers.js";

const router = express.Router();

router.get('/sneakers', getSneakers)
router.get('/sneakers/search', searchSneakers)
router.get('/sneakers/prices/:styleID', getSneakerPrices)

export default router;

