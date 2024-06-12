const rateLimit = require('express-rate-limit');

// Set up rate limiter: 10 requests per minute
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // maximum 10 requests per minute
  message: 'Too many requests from this IP, please try again later.',
});

module.exports =limiter;

