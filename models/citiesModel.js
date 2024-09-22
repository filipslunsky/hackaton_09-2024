const { db } = require('../config/data.js');

const _getCitiesByUserEmail = email => {
    return db('cities').select('cities.city', 'cities.country', 'users.email').join('favorites', 'cities.id', '=', 'favorites.city_id').join('users', 'users.id', '=', 'favorites.user_id'). where('users.email', email);
};

const _addNewCityForUser = async (email, city, country) => {
    try {
        await db('cities').insert({city, country}).onConflict(['city', 'country']).ignore();
        
        return await db.transaction(async (trx) => {
            const userRecord = await trx('users').select('id').where({ email }).first();
            if (!userRecord) {
                return { success: false, message: 'User not found' };
            }
            const userId = userRecord.id;

            let cityRecord = await trx('cities')
                .select('id')
                .where({ city, country })
                .first();
            const cityId = cityRecord.id;

            const favoriteExists = await trx('favorites')
                .where({ user_id: userId, city_id: cityId })
                .first();
            if (favoriteExists) {
                return { success: false, message: 'City is already in user favorites' };
            }

            await trx('favorites').insert({
                user_id: userId,
                city_id: cityId
            });
            return { success: true, message: 'City successfully added to favorites' };
        });
    } catch (error) {
        console.error('Transaction error:', error);
        return { success: false, message: `Error adding favorite city: ${error.message}` };
    }
};

const _deleteFavoriteCityByEmail = async (email, city, country) => {
    try {
        return await db.transaction(async (trx) => {
            const userRecord = await trx('users').select('id').where({ email }).first();
            if (!userRecord) {
                return { success: false, message: 'User not found' };
            }
            const userId = userRecord.id;

            let cityRecord = await trx('cities').select('id').where({ city, country }).first();
            if (!cityRecord) {
                return { success: false, message: 'City not found' };
            }
            const cityId = cityRecord.id;

            await trx('favorites').delete().where({
                user_id: userId,
                city_id: cityId
            });
            return { success: true, message: 'City successfully deleted from favorites' };
    });
    } catch (error) {
        console.error('Transaction error:', error);
        return { success: false, message: `Error deleting favorite city: ${error.message}` };
    }
};


module.exports = {
    _getCitiesByUserEmail,
    _addNewCityForUser,
    _deleteFavoriteCityByEmail
};

