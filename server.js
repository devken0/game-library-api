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

// Basic route
app.get('/', (req, res) => {
  res.send('API is working'); 
});

// User register and login routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Game library routes
const gameRoutes = require('./routes/gameRoutes');
app.use('/api/game', gameRoutes);

// Error handler plugged in for all routes 
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
