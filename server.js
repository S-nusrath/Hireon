const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Import DB connection and Sequelize instance
const { connectDB, sequelize } = require('./config/db');
const User = require('./models/User'); // sample model

// Connect to MySQL DB
connectDB().then(() => {
  // Sync models
  sequelize.sync({ alter: true }).then(() => {
    console.log('📦 All models were synchronized successfully.');
  });
});

app.get('/', (req, res) => {
  res.send('Hireon backend with MySQL is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
