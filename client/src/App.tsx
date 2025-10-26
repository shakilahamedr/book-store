// client/src/App.tsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';

// Dynamically set basename: '/' for local dev, '/book-store' for GitHub Pages
const basename = process.env.NODE_ENV === 'production' ? '/book-store' : '/';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'books', element: <Books /> },
        { path: 'books/:id', element: <BookDetails /> },
        { path: 'cart', element: <Cart /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ],
  { basename }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
