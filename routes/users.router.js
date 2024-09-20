const express = require('express');
const {
    getAllUsers,
    addNewUser,
    getUserPasswordByEmail,
    updateUser,
    deleteUser
} = require('../controllers/usersController.js');

const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);

usersRouter.post('/register', addNewUser);

usersRouter.post('/login', getUserPasswordByEmail);

usersRouter.put('/', updateUser);

usersRouter.delete('/', deleteUser);

module.exports = usersRouter;