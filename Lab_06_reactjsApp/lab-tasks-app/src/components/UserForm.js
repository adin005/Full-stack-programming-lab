import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [display, setDisplay] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(formData);
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="card">
      <h2>Task 2: User Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={formData.name} required
          onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <input type="email" placeholder="Email" value={formData.email} required
          onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <button type="submit">Submit</button>
      </form>
      {display && (
        <div className="result">
          <p><strong>Name:</strong> {display.name}</p>
          <p><strong>Email:</strong> {display.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserForm;
