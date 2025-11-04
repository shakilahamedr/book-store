// client/src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4">Welcome to BookStore</h1>
              <p className="text-lg">Discover your next favorite book from our curated collection.</p>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
