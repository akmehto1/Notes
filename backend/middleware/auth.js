
var jwt = require('jsonwebtoken');
const secretKey = 'yourSecretKey';

// Middleware to verify JWT for protected routes
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;


  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  


  jwt.verify(token,'shhhhh',(err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

  

    // Attach the decoded user data to the request for further use in the route
    req.userid = decoded.userid;
    req.key=decoded.key;
    
    next();
  });
};


module.exports=verifyToken;

