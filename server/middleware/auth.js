const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const authMiddleware = (req, res, next) =>{
    const token = req.header("Authorization");

    if(!token){
        return res.status(401).json({msg:"No token, authorization denied"});   
    }

    try{
        const decoded = jwt.verify(token.replace("Bearer", ""), process.env,JWT_Secret);
        req.user = decoded.user;
        next();
    }catch(error){
        res.status(401).json({msg:"Invalid token"});
    }
};

module.exports = authMiddleware;