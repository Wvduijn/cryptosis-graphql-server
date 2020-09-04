import mongoose from 'mongoose';

// investmentSchema which is basically a crypto you have invested in
const investmentSchema = new mongoose.Schema({
  coinName: {
    type: String,
    required: true,
    unique: false,
  },
  amount: {
    type: Number,
    required: true,
  },
  buyPrice: {
    type: Number,
    required: true,
  },
  priceType: {
    type: String,
    required: true,
    default: 'TOTAL',
  },
  currency: {
    type: String,
    required: true,
    default: 'EUR',
  },
  buyDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  description: {
    type: String,
  }
});

export default mongoose.model('Investment', investmentSchema);
