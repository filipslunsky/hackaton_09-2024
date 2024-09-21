const express = require('express');
const {
    getAllUsers,
    addNewUser,
    loginUser,
    updateUser,
    deleteUser
} = require('../controllers/usersController.js');

const { authenticateToken } = require('../middleware/usersMiddleware.js');

const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);

usersRouter.post('/register', addNewUser);

usersRouter.post('/login', loginUser);

usersRouter.put('/', authenticateToken, updateUser);

usersRouter.delete('/', authenticateToken, deleteUser);

module.exports = usersRouter;