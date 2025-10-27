const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Use dotenv only in a local development environment.
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

let MONGODB = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bookstore';
if (MONGODB.includes('localhost')) {
    MONGODB = MONGODB.replace('localhost', '127.0.0.1');
}
if (MONGODB.includes('127.0.0.1')) {
    console.log('using locally hosted mongodb 127.0.0.1:27017 for mongodb connection');
}

const connectDB = async () => {
    try {
        // Database connection
        await mongoose.connect(MONGODB);
        console.log(`Connected to MongoDB`);
    } catch (error) {
        console.error('Database connection failed', error);
        process.exit(1);
    }
};

// Export the function using CommonJS syntax
module.exports = connectDB;