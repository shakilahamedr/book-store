const express = require('express');
const cors = require('cors');
const connectDB = require('./db.js');
const dotenv = require('dotenv');

const app = express();

// Use dotenv only in a local development environment.
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// Routes (will be imported from routes folder)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/books', require('./routes/books'));
app.use('/api/orders', require('./routes/orders'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});