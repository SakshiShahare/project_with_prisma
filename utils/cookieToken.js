const getJWTToken = require('../helpers/getJwtTokens.js');

const cookieToken = (user, res)=>{
    const token = getJWTToken(user.id);

    const options = {
        expires: new Date(Date.now() + 3*24*60*60*1000),
        httpOnly : true
        //now the cookie can only be manipulated by server side
    }

    res.status(200).cookie('token' , token , options).json({success : true , token , user});
}

module.exports = {cookieToken};