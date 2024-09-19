const express = require('express');
const {
    getAllCities
} = require('../controllers/citiesController.js');

const citiesRouter = express.Router();

citiesRouter.get('/', getAllCities);

module.exports = citiesRouter;