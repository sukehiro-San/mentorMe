const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const mentorRoutes = require('./routes/mentorRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
const port = 3000;

mongoose.connect('your-mongodb-atlas-connection-string', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/mentors', authMiddleware.authenticate, mentorRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
