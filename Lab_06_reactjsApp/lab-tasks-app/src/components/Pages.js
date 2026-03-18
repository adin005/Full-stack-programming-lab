import React from 'react';

export const Home = () => (
  <div className="card">
    <h1>Welcome Home</h1>
    <p>This is the landing page for our Multi-Page React Router lab.</p>
  </div>
);

export const About = () => (
  <div className="card">
    <h1>About Us</h1>
    <p>This website was built to demonstrate React Routing, State, and Component architecture.</p>
  </div>
);

export const Contact = () => (
  <div className="card">
    <h1>Contact Us</h1>
    <form className="contact-form">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Your Message"></textarea>
      <button type="button">Send Message</button>
    </form>
  </div>
);

export const Products = () => {
  const prods = [
    { id: 1, name: "React Course", price: "$49", desc: "Master React Hooks and State." },
    { id: 2, name: "JS Mastery", price: "$39", desc: "Advanced JavaScript concepts." }
  ];
  return (
    <div className="card">
      <h1>Our Products</h1>
      <div className="product-grid">
        {prods.map(p => (
          <div key={p.id} className="product-item">
            <h3>{p.name} - {p.price}</h3>
            <p>{p.desc}</p>
            <button onClick={() => alert("Added to cart!")}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const NotFound = () => <div className="card"><h1>404: Page Not Found</h1></div>;