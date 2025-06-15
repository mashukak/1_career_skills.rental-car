import { useState } from 'react';

export default function CarDetailForm({ car }) {
  const [form, setForm] = useState({ name: '', email: '', date: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Booking submitted:', form);
    setSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Book: {car.make} {car.model}</h3>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <input name="date" type="date" value={form.date} onChange={handleChange} />
      <button type="submit">Rent</button>
      {success && <p>✅ Booking successful!</p>}
    </form>
  );
}
