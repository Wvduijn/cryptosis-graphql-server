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
    default: 'TOTAL',
    required: true,
  },
  currency: {
    type: String,
    default: 'EUR',
    required: true,
  },
  buyDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  description: {
    type: String,
  },
  investor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

export default mongoose.model('Investment', investmentSchema);
