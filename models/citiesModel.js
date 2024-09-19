const { db } = require('../config/data.js');

const _getAllCities = () => {
    return db('cities').select('id', 'country', 'city');
};

const _getCityByCityNameAndCountry = (city, country) => {
    return db('cities').select('id', 'country', 'city').where({city, country});
};

module.exports = {
    _getAllCities,
    _getCityByCityNameAndCountry
};