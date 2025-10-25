import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import { useCart } from '../contexts/CartContext';

interface Review { _id: string; rating: number; comment: string; user?: { username?: string }; date?: string }

interface Book {
  _id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  coverImage?: string;
  genre: string;
  isbn?: string;
  reviews?: Review[];
}

const BookDetails: React.FC = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await api.get(`/books/${id}`);
        setBook(res.data);
      } catch (err) {
        setError('Could not load book');
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  if (loading) return <div className="py-20">Loading...</div>;
  if (error || !book) return <div className="text-red-600">{error || 'Not found'}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        <img src={book.coverImage || 'https://via.placeholder.com/300x450?text=No+Cover'} alt={book.title} className="w-full rounded" />
      </div>
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <p className="text-sm text-gray-600">By {book.author}</p>
        <div className="mt-4 text-amber-700 text-2xl font-semibold">${book.price.toFixed(2)}</div>
        <p className="mt-4 text-gray-700">{book.description}</p>

        <div className="mt-6 flex items-center gap-4">
          <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="p-2 border rounded-md">
            {Array.from({length:10}, (_,i)=>i+1).map(n => <option key={n} value={n}>{n}</option>)}
          </select>
          <button onClick={() => addItem({ id: book._id, title: book.title, price: book.price, quantity, coverImage: book.coverImage })} className="px-4 py-2 bg-amber-700 text-white rounded-md">Add to cart</button>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold">Reviews</h3>
          <div className="mt-4 space-y-4">
            {book.reviews?.length ? book.reviews.map(r => (
              <div key={r._id} className="p-3 border rounded bg-white">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-semibold">{r.user?.username || 'Anonymous'}</div>
                  <div className="text-sm text-gray-600">{new Date(r.date || Date.now()).toLocaleDateString()}</div>
                </div>
                <div className="mt-2 text-gray-700">{r.comment}</div>
              </div>
            )) : (<div className="text-gray-500">No reviews yet.</div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
