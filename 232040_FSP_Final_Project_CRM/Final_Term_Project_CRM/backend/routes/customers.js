const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
const { protect } = require('../middleware/auth');

// All routes protected
router.use(protect);

// @route GET /api/customers
router.get('/', async (req, res) => {
  try {
    const { search, status } = req.query;
    let query = { createdBy: req.user._id };

    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }
    if (status && status !== 'All') {
      query.status = status;
    }

    const customers = await Customer.find(query).sort({ createdAt: -1 });
    res.json({ success: true, count: customers.length, customers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route GET /api/customers/:id
router.get('/:id', async (req, res) => {
  try {
    const customer = await Customer.findOne({ _id: req.params.id, createdBy: req.user._id });
    if (!customer) return res.status(404).json({ success: false, message: 'Customer not found' });
    res.json({ success: true, customer });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route POST /api/customers
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, company, address, status, notes } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, message: 'Name, email, and phone are required' });
    }
    const customer = await Customer.create({
      name, email, phone, company, address, status, notes,
      createdBy: req.user._id,
    });
    res.status(201).json({ success: true, message: 'Customer added successfully', customer });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route PUT /api/customers/:id
router.put('/:id', async (req, res) => {
  try {
    const customer = await Customer.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!customer) return res.status(404).json({ success: false, message: 'Customer not found' });
    res.json({ success: true, message: 'Customer updated successfully', customer });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route DELETE /api/customers/:id
router.delete('/:id', async (req, res) => {
  try {
    const customer = await Customer.findOneAndDelete({ _id: req.params.id, createdBy: req.user._id });
    if (!customer) return res.status(404).json({ success: false, message: 'Customer not found' });
    res.json({ success: true, message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
