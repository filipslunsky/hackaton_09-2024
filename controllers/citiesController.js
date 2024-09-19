const {
    _getAllCities,
    _getCityByCityNameAndCountry
} = require('../models/citiesModel');

const getAllCities = async (req, res) => {
    try {
        const data = await _getAllCities();
        res.json(data);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllCities
};