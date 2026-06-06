const mongoose = require('mongoose');

const InvoiceItemSchema = new mongoose.Schema({
  description: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
  unitPrice: { type: Number, required: true, min: 0 },
});

const InvoiceSchema = new mongoose.Schema(
  {
    invoiceNumber: { type: String, required: true, unique: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    items: [InvoiceItemSchema],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ['Pending', 'Paid', 'Overdue'], default: 'Pending' },
    dueDate: { type: Date, required: true },
    notes: { type: String, default: '' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Invoice', InvoiceSchema);
