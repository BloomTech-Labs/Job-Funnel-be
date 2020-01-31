const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token, secret, (err, decodedToken) => {
            if(err){
                res.status(401).json({message: 'Invalid token'});
            }else{
                // console.log(decodedToken);
                req.user = {id: decodedToken.subject};
                next();
            }
        });
    }else{
        res.status(400).json({message: 'No token was provided'});
    }
};