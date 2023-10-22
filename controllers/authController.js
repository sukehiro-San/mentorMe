const Mentee = require('../models/mentee')
const jwt = require('../utilities/jwt');

// Register a mentee
exports.register = async (req, res) => {
  try {
    // Create a new mentee
    const mentee = new Mentee(req.body);
    await mentee.save();

    // Generate and send a JWT token
    const token = jwt.signToken(mentee);

    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Log in a mentee
exports.login = async (req, res) => {
  // Verify the mentee's username and password
  // Generate and send a JWT token
};

// Update mentee profile
exports.updateProfile = async (req, res) => {
  // Update mentee's profile
};

// Delete mentee profile
exports.deleteProfile = async (req, res) => {
  // Delete mentee's profile
};
