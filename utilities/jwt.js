const jwt = require('jsonwebtoken');

// Secret key for JWT
const JWT_SECRET = 'your-secret-key';

// Function to create a JWT token
exports.signToken = (user) => {
  const payload = {
    user: {
      id: user.id,
      // Add other user information to include in the token if needed
    },
  };

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: 3600, // 1 hour
  });
};
