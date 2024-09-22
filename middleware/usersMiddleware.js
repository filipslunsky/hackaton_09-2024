const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const JWTSECRET = process.env.JWTSECRET;

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    // console.log('Auth Header:', authHeader);
    // console.log('Token:', token);

    if (token == null) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
    
    jwt.verify(token, JWTSECRET, (err, user) => {
        if (err) {
            console.log('Token verification error:', err);
            return res.status(403).json({ message: 'Token is not valid' });
        }
        req.user = user;
        next();
    });
};


module.exports = {
    authenticateToken
};