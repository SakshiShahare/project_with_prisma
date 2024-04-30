const jwt = require('jsonwebtoken');

const getJWTToken = (userId) =>{
    return jwt.sign({id : userId}, process.env.JWT_SECRET , {expiresIn : '1d'})
}

module.exports = getJWTToken;