const jwt = require('jsonwebtoken')

module.exports= (req ,res, next)=>{
    try{
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({message : 'auth failed'})
        }

        const parts = authHeader.split(' ');
        let token;
        if (parts.length === 2) {
            const scheme = parts[0].toLowerCase();
            if (scheme !== 'bearer') {
                return res.status(401).json({message : 'auth failed'})
            }
            token = parts[1];
        } else {
            token = authHeader;
        }

        if (!token) {
            return res.status(401).json({message : 'auth failed'})
        }
        const decodedToken = jwt.verify(token , process.env.JWT_KEY)
        req.userData = {email : decodedToken.email , userId : decodedToken.userId}
        next()
    }catch(error){
        console.log(error)
        res.status(401).json({message : 'auth failed'})
    }
}