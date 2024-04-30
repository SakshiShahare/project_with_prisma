const prisma = require('../prisma/index.js');
const {cookieToken} = require('../utils/cookieToken.js');
const  {asyncHandler} = require ('../utils/asyncHandler.js');
const ApiError = require('../utils/ApiError.js');
const ApiResponse = require('../utils/ApiResponse.js');



const register = asyncHandler(async(req, res)=>{

    const {name , email , password} = req.body;

    if(!name || !email || !password){
        throw new ApiError(404 , "Please provide all the details");
    }

    const user = await prisma.user.create({
        data : {
            name, 
            email,
            password
        }

    });

    //send the cookie token 
    cookieToken(user, res)

})

module.exports = {register};