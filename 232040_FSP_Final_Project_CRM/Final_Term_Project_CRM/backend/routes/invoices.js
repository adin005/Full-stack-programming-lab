const express = require('express');
const router = express.Router();
const Invoice = require('../models/Invoice');
const { protect } = require('../middleware/auth');

router.use(protect);

// @route GET /api/invoices
router.get('/', async (req, res) => {
  try {
    const invoices = await Invoice.find({ createdBy: req.user._id })
      .populate('customer', 'name email company')
      .sort({ createdAt: -1 });
    res.json({ success: true, invoices });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route GET /api/invoices/:id
router.get('/:id', async (req, res) => {
  try {
    const invoice = await Invoice.findOne({ _id: req.params.id, createdBy: req.user._id })
      .populate('customer', 'name email phone company address');
    if (!invoice) return res.status(404).json({ success: false, message: 'Invoice not found' });
    res.json({ success: true, invoice });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route POST /api/invoices
router.post('/', async (req, res) => {
  try {
    const { customer, items, dueDate, notes, status } = req.body;
    if (!customer || !items || items.length === 0) {
      return res.status(400).json({ success: false, message: 'Customer and items are required' });
    }
    const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
    const invoiceNumber = `INV-${Date.now()}`;
    const invoice = await Invoice.create({
      invoiceNumber, customer, items, totalAmount, dueDate, notes, status,
      createdBy: req.user._id,
    });
    const populated = await invoice.populate('customer', 'name email phone company address');
    res.status(201).json({ success: true, message: 'Invoice created successfully', invoice: populated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route DELETE /api/invoices/:id
router.delete('/:id', async (req, res) => {
  try {
    const invoice = await Invoice.findOneAndDelete({ _id: req.params.id, createdBy: req.user._id });
    if (!invoice) return res.status(404).json({ success: false, message: 'Invoice not found' });
    res.json({ success: true, message: 'Invoice deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
