import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage?: string;
}

const BookCard: React.FC<Props> = ({ id, title, author, price, coverImage }) => {
  return (
    <div className="bg-white shadow rounded overflow-hidden">
      <Link to={`/books/${id}`}>
        <div className="h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img src={coverImage || 'https://via.placeholder.com/200x300?text=No+Cover'} alt={title} className="h-full" />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500">{author}</p>
        <div className="mt-3 flex justify-between items-center">
          <div className="text-lg font-bold text-amber-700">${price.toFixed(2)}</div>
          <Link to={`/books/${id}`} className="text-sm text-amber-700">View</Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
