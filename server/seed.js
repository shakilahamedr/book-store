const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const connectDB = require('./db.js');
const Book = require('./models/Book');
const User = require('./models/User');
const Order = require('./models/Order');

async function seed() {
	try {
		await connectDB();
		console.log('MongoDB seeding starts');

		// Clear existing
		await Book.deleteMany({});
		await User.deleteMany({});
		await Order.deleteMany({});

		// Create users
		const password = await bcrypt.hash('password123', 10);
		const user = await User.create({ username: 'demo', email: 'demo@bookstore.com', password });

		// Sample books
		const books = [
			{
				title: 'The Nature of Code',
				author: 'Daniel Shiffman',
				description: 'A gentle introduction to programming simulations of natural systems.',
				genre: 'Technology',
				price: 29.99,
				coverImage: 'https://via.placeholder.com/300x450?text=Nature+of+Code',
				isbn: '978-0985930808',
				stock: 12,
				reviews: []
			},
			{
				title: 'The Little Prince',
				author: 'Antoine de Saint-Exupéry',
				description: 'A poetic tale about loneliness, friendship, love, and loss.',
				genre: 'Fiction',
				price: 9.99,
				coverImage: 'https://via.placeholder.com/300x450?text=The+Little+Prince',
				isbn: '978-0156012195',
				stock: 30,
				reviews: []
			},
			{
				title: 'Clean Code',
				author: 'Robert C. Martin',
				description: 'A handbook of agile software craftsmanship.',
				genre: 'Technology',
				price: 34.99,
				coverImage: 'https://via.placeholder.com/300x450?text=Clean+Code',
				isbn: '978-0132350884',
				stock: 7,
				reviews: []
			},
			{
				title: 'Sapiens: A Brief History of Humankind',
				author: 'Yuval Noah Harari',
				description: 'Explores the development of humankind and how biology and history defined us.',
				genre: 'History',
				price: 19.99,
				coverImage: 'https://via.placeholder.com/300x450?text=Sapiens',
				isbn: '978-0062316097',
				stock: 15,
				reviews: []
			}
		];

		const createdBooks = await Book.insertMany(books);
		console.log(`Inserted ${createdBooks.length} books`);

		// Create an order for demo user
		const order = await Order.create({
			user: user._id,
			items: [
				{ book: createdBooks[0]._id, quantity: 1, price: createdBooks[0].price },
				{ book: createdBooks[1]._id, quantity: 2, price: createdBooks[1].price }
			],
			totalAmount: createdBooks[0].price + createdBooks[1].price * 2,
			status: 'confirmed'
		});

		console.log('Created demo user and order');

		await mongoose.disconnect();
		console.log('Database seed complete');
		process.exit(0);
	} catch (err) {
		console.error('Seeding failed', err);
		process.exit(1);
	}
}

seed();
