const express = require('express');
const {
    getAllCities,
    getCitiesByUserEmail,
    addNewCityForUser,
    deleteFavoriteCityByEmail
} = require('../controllers/citiesController.js');

const citiesRouter = express.Router();

citiesRouter.get('/', getAllCities);

citiesRouter.post('/', getCitiesByUserEmail);

citiesRouter.post('/user', addNewCityForUser);

citiesRouter.delete('/user', deleteFavoriteCityByEmail);

module.exports = citiesRouter;