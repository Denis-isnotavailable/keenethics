const express = require('express');
const {
    getAllBikes,
    addBike,
    deleteBike,
    updateBike,
    allStats
} = require('../controllers');

const bikeRouter = express.Router();

bikeRouter.get("/allBikes", getAllBikes);
bikeRouter.post("/addBike", addBike);
bikeRouter.put("/updateBike/:id", updateBike);
bikeRouter.delete("/deleteBike/:id", deleteBike);
bikeRouter.get("/allStats", allStats);

module.exports = bikeRouter;