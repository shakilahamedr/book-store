import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <div className="bg-white rounded-lg p-8 shadow mb-8">
        <h1 className="text-4xl font-bold text-amber-800">Welcome to Our Bookstore</h1>
        <p className="mt-4 text-gray-600">Discover great books across genres. Browse by category, search by title or author, and add favorites to your cart.</p>
        <div className="mt-6">
          <Link to="/books" className="px-6 py-3 bg-amber-700 text-white rounded-md">Browse Books</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold">Curated Selection</h3>
          <p className="mt-2 text-gray-600">We handpick books to ensure quality and variety.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold">Fast Shipping</h3>
          <p className="mt-2 text-gray-600">Reliable delivery and tracking for all orders.</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold">Support</h3>
          <p className="mt-2 text-gray-600">Responsive customer support to help you find the right book.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
