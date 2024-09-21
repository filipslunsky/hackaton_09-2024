const {
    _getAllCities,
    // _getCityByCityNameAndCountry,
    _getCitiesByUserEmail,
    _addNewCityForUser,
    _deleteFavoriteCityByEmail
} = require('../models/citiesModel');

const getAllCities = async (req, res) => {
    try {
        const data = await _getAllCities();
        res.json(data);
    } catch (error) {
        console.log(error);
    }
};

const getCitiesByUserEmail = async (req, res) => {
    const { email } = req.body;
    try {
        const data = await _getCitiesByUserEmail(email);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.json({message: 'no cities found for this user'});
    }
};

const addNewCityForUser = async (req, res) => {
    const  { email, city, country} = req.body;
    try {
        const data = await _addNewCityForUser(email, city, country);
        if (data.success) {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteFavoriteCityByEmail = async (req, res) => {
    const  { email, city, country} = req.body;
    try {
        const data = await _deleteFavoriteCityByEmail(email, city, country);
        if (data.success) {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = {
    getAllCities,
    getCitiesByUserEmail,
    addNewCityForUser,
    deleteFavoriteCityByEmail
};