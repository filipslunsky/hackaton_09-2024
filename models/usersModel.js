const { db } = require('../config/data.js');

const _getAllUsers = () => {
    return db('users').select('first_name', 'last_name', 'email');
};

const _addNewUser = async (firstName, lastName, email, hashedPassword) => {
    try {
        return await db.transaction(async (trx) => {
            const userExists = await trx('users')
                .where({ email })
                .first();
            if (userExists) {
                return { success: false, message: 'User already exists' };
            }
            await trx('users').insert({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: hashedPassword
            });
            return { success: true, message: 'user successfully created' };
        });
    } catch (error) {
        console.error('Transaction error:', error);
        return { success: false, message: `Error adding user: ${error.message}` };
    }
};

const _getUserPasswordByEmail = async (email) => {
    try {
        return await db.transaction(async (trx) => {
            const userExists = await trx('users')
                .where({ email })
                .first();
            if (!userExists) {
                return { success: false, password: null, message: 'User does not exist' };
            }
            const user = await trx('users').select('password').where({ email }).first();
            return { success: true, password: user.password };
        });
    } catch (error) {
        console.error('Transaction error:', error);
        return { success: false, message: `Error checking password: ${error.message}` };
    }
};

const _updateUser = async (firstName, lastName, email, hashedPassword) => {
    try {
        return await db.transaction(async (trx) => {
            const userExists = await trx('users')
                .where({ email })
                .first();
            if (!userExists) {
                return { success: false, message: 'User does not exist' };
            }
            const user = await trx('users').update({first_name: firstName, last_name: lastName, password: hashedPassword}).where({ email });
            return { success: true, firstName, lastName};
        });
    } catch (error) {
        console.error('Transaction error:', error);
        return { success: false, message: `Error updating user: ${error.message}` };
    }
};

const _deleteUser = async (email) => {
    try {
        return await db.transaction(async (trx) => {
            const userExists = await trx('users')
                .where({ email })
                .first();
            if (!userExists) {
                return { success: false, message: 'User does not exist' };
            }
            await trx('users').where({email}).delete();
            return { success: true, message: 'User successfully deleted' };
        });
    } catch (error) {
        console.error('Transaction error:', error);
        return { success: false, message: `Error updating user: ${error.message}` };
    }
};


module.exports = {
    _getAllUsers,
    _addNewUser,
    _getUserPasswordByEmail,
    _updateUser,
    _deleteUser
};