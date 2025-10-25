import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import api from '../api';

interface Book {
  _id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  coverImage?: string;
  genre: string;
}

const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get('/books');
        setBooks(response.data);
      } catch (err) {
        setError('Error fetching books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const genres = ['all', ...Array.from(new Set(books.map(book => book.genre)) )];

  const filteredBooks = books.filter(book => {
    const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre;
    const lower = searchQuery.toLowerCase();
    const matchesSearch = book.title.toLowerCase().includes(lower) || book.author.toLowerCase().includes(lower);
    return matchesGenre && matchesSearch;
  });

  if (loading) return <div className="flex justify-center py-20">Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center">
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} className="p-2 border rounded-md">
          {genres.map(g => <option key={g} value={g}>{g}</option>)}
        </select>
        <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search by title or author" className="p-2 border rounded-md flex-1" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredBooks.map(b => (
          <BookCard key={b._id} id={b._id} title={b.title} author={b.author} price={b.price} coverImage={b.coverImage} />
        ))}
      </div>
    </div>
  );
};

export default Books;
