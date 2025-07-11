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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
