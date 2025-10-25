import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-amber-50 text-gray-800">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-2xl font-bold text-amber-800">BookStore</Link>
              <div className="hidden md:flex space-x-4">
                <Link to="/books" className="text-gray-700 hover:text-amber-800">Books</Link>
                <Link to="/about" className="text-gray-700 hover:text-amber-800">About</Link>
                <Link to="/contact" className="text-gray-700 hover:text-amber-800">Contact</Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/cart" className="text-gray-700 hover:text-amber-800">Cart</Link>
              <Link to="/login" className="text-gray-700 hover:text-amber-800">Login</Link>
              <Link to="/register" className="px-3 py-1 bg-amber-700 text-white rounded-md">Register</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4">
        <Outlet />
      </main>

      <footer className="bg-white mt-12 py-6 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600">
          © 2025 BookStore — curated books for curious minds
        </div>
      </footer>
    </div>
  );
};

export default Layout;
