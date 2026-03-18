import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import Actions from './components/Actions';
import { Home, About, Contact, Products, NotFound } from './components/Pages';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/counter">Task 1</Link>
        <Link to="/form">Task 2</Link>
        <Link to="/actions">Task 3</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;