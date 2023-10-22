const mongoose = require("mongoose");

const menteeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  profession: { type: String, required: true },
  // Fields that mentors can use for advice and sessions
  interests: [{ type: String }], // Interests of the mentee
  goals: [{ type: String }], // Goals of the mentee
  challenges: [{ type: String }], // Challenges faced by the mentee
  // Other profile fields
});

module.exports = mongoose.model("Mentee", menteeSchema);
