const express = require(`express`);
const dotenv = require(`dotenv`);
const mongoose = require(`mongoose`);

dotenv.config();

const app = express();
app.use(express.json()); // to parse JSON - convert string to objects/data

const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Rate limiting
const limiter = require('./middlewares/rateLimit');
app.use(limiter);

// Simple logger for API calls in the console/terminal
const logger = require('./middlewares/logger');
app.use(logger);

// Basic route
app.get('/', (req, res) => {
  res.send('API is working'); 
});

// User register and login routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Game library routes
const gameRoutes = require('./routes/gameRoutes');
app.use('/api/games', gameRoutes);

// Error handler
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

module.exports = app; // for testing purpsoses

// makes sure that server was ran directly before starting
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
}