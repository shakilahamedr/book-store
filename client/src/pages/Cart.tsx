import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { items, updateQuantity, removeItem } = useCart();
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);

  if (items.length === 0) return (
    <div className="text-center py-20">
      <p className="text-gray-600">Your cart is empty.</p>
      <Link to="/books" className="mt-4 inline-block px-4 py-2 bg-amber-700 text-white rounded-md">Browse Books</Link>
    </div>
  );

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="flex items-center bg-white p-4 rounded shadow">
            <img src={item.coverImage || 'https://via.placeholder.com/80x120'} alt={item.title} className="w-20 h-28 object-cover rounded" />
            <div className="ml-4 flex-1">
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                </div>
                <div className="font-semibold text-amber-700">${(item.price * item.quantity).toFixed(2)}</div>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <select value={item.quantity} onChange={(e) => updateQuantity(item.id, Number(e.target.value))} className="p-1 border rounded">
                  {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
                <button onClick={() => removeItem(item.id)} className="text-red-600">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-white rounded shadow">
        <div className="flex justify-between items-center">
          <div className="font-semibold">Subtotal</div>
          <div className="text-amber-700 font-bold text-xl">${subtotal.toFixed(2)}</div>
        </div>
        <div className="mt-4">
          <button onClick={() => alert('Place order flow (stub)') } className="px-4 py-2 bg-amber-700 text-white rounded-md">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
