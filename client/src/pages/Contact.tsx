import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); alert('Thanks — we will reply soon!'); setForm({ name: '', email: '', message: '' }); };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input name="name" value={form.name} onChange={onChange} className="w-full p-2 border rounded" placeholder="Your name" />
        <input name="email" value={form.email} onChange={onChange} className="w-full p-2 border rounded" placeholder="Email" />
        <textarea name="message" value={form.message} onChange={onChange} className="w-full p-2 border rounded" rows={6} placeholder="Message" />
        <button className="px-4 py-2 bg-amber-700 text-white rounded">Send</button>
      </form>
    </div>
  );
};

export default Contact;
