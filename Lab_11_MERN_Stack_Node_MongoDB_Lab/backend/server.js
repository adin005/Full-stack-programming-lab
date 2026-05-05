const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // This allows the Next.js frontend to fetch data from this backend

// Connect to MongoDB (Ensure MongoDB Compass/Server is running on your machine)
mongoose.connect('mongodb://127.0.0.1:27017/ecommerceApp')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Create Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String
});

// Create Product Model
const Product = mongoose.model('Product', productSchema);

// Route 1: Insert dummy data into the database (Run this once to populate your DB)
app.get('/api/add-products', async (req, res) => {
  await Product.insertMany([
    { name: "Gaming Laptop", price: 1200, description: "High performance laptop with RTX 4060" },
    { name: "Wireless Mouse", price: 50, description: "Ergonomic wireless mouse" },
    { name: "Mechanical Keyboard", price: 100, description: "RGB Mechanical Keyboard with Blue Switches" }
  ]);
  res.send("Dummy Products Added Successfully!");
});

// Route 2: Get Data API (The frontend will call this)
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Start Server
app.listen(5000, () => {
  console.log("Backend server running on port 5000");
});