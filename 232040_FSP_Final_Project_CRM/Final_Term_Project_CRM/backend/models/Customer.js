const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is required'], trim: true },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    phone: { type: String, required: [true, 'Phone is required'], trim: true },
    company: { type: String, trim: true, default: '' },
    address: { type: String, trim: true, default: '' },
    status: {
      type: String,
      enum: ['Lead', 'Active', 'Inactive'],
      default: 'Lead',
    },
    notes: { type: String, default: '' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Customer', CustomerSchema);
