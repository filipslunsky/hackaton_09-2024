const express = require('express');
const {
    getCitiesByUserEmail,
    addNewCityForUser,
    deleteFavoriteCityByEmail
} = require('../controllers/citiesController.js');

const { authenticateToken } = require('../middleware/usersMiddleware.js');

const citiesRouter = express.Router();

citiesRouter.post('/', authenticateToken, getCitiesByUserEmail);

citiesRouter.post('/user', authenticateToken, addNewCityForUser);

citiesRouter.delete('/user', authenticateToken, deleteFavoriteCityByEmail);

module.exports = citiesRouter;