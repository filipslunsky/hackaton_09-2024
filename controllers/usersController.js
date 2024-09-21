const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
    _getAllUsers,
    _addNewUser,
    _loginUser,
    _updateUser,
    _deleteUser
} = require('../models/usersModel.js');

dotenv.config();

const JWTSECRET = process.env.JWTSECRET;

const getAllUsers = async (req, res) => {
    try {
        const data = await _getAllUsers();
        res.json(data);
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const addNewUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const data = await _addNewUser(firstName, lastName, email, hashedPassword);
        if (data.success) {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        };
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const data = await _loginUser(email);
        if (data.success) {
            const match = await bcrypt.compare(password, data.password);
            if (match) {
                const token = jwt.sign(
                    { userId: data.id, email: data.email },
                    JWTSECRET,
                    { expiresIn: '1h' }
                );
                res.json({success: true, passwordMatch: true, firstName: data.firstName, lastName: data.lastName, email: data.email, token});
            } else {
                res.json({success: true, passwordMatch: false})
            }
        } else {
            res.status(400).json(data);
        };
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const updateUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const data = await _updateUser(firstName, lastName, email, hashedPassword);
        if (data.success) {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        };
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteUser = async (req, res) => {
    const { email } = req.body;
    try {
        const data = await _deleteUser(email);
        if (data.success) {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        };
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



module.exports = {
    getAllUsers,
    addNewUser,
    loginUser,
    updateUser,
    deleteUser
};