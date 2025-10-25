const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

dotenv.config();

const Book = require('./models/Book');
const User = require('./models/User');
const Order = require('./models/Order');

const MONGO = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bookstore';

async function seed() {
  try {
    await mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB for seeding');

    // Clear existing data
    await Order.deleteMany({});
    await Book.deleteMany({});
    await User.deleteMany({});

    // Create a sample user
    const password = await bcrypt.hash('password123', 10);
    const user = await User.create({
      username: 'demo',
      email: 'demo@bookstore.test',
      password,
    });

    // Sample books
    const books = [
      {
        title: 'The Little Prince',
        author: 'Antoine de Saint-Exupéry',
        description: 'A poetic tale of loneliness, friendship, love, and loss.',
        genre: 'Fiction',
        price: 9.99,
        coverImage: 'https://picsum.photos/seed/prince/400/600',
        isbn: '9780156012195',
        stock: 12,
        reviews: [
          { user: user._id, rating: 5, comment: 'A timeless classic.' }
        ]
      },
      {
        title: 'Atomic Habits',
        author: 'James Clear',
        description: 'An easy & proven way to build good habits & break bad ones.',
        genre: 'Self-help',
        price: 14.99,
        coverImage: 'https://picsum.photos/seed/atomic/400/600',
        isbn: '9780735211292',
        stock: 20,
        reviews: []
      },
      {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt & David Thomas',
        description: 'Classic book about software engineering best practices.',
        genre: 'Technology',
        price: 29.99,
        coverImage: 'https://picsum.photos/seed/pragmatic/400/600',
        isbn: '9780201616224',
        stock: 8,
        reviews: []
      },
      {
        title: 'Dune',
        author: 'Frank Herbert',
        description: 'Epic science fiction novel of politics, religion and ecology.',
        genre: 'Science Fiction',
        price: 12.5,
        coverImage: 'https://picsum.photos/seed/dune/400/600',
        isbn: '9780441013593',
        stock: 15,
        reviews: []
      }
    ];

    const createdBooks = await Book.insertMany(books);

    // Create a sample order
    const order = await Order.create({
      user: user._id,
      items: [
        { book: createdBooks[0]._id, quantity: 1, price: createdBooks[0].price }
      ],
      totalAmount: createdBooks[0].price,
      status: 'confirmed'
    });

    console.log('Seed complete:');
    console.log(' Users:', 1);
    console.log(' Books:', createdBooks.length);
    console.log(' Orders:', 1);

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed();
