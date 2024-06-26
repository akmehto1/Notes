// rateLimitMiddleware.js
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // maximum 5 attempts
  handler: (req, res) => {
    // Customize the response message and status code
    res.status(429).json({
      status: 'error',
      message: 'Too many login attempts. Please try again later.',
    });
  },
});

module.exports = {
  loginLimiter,
};
