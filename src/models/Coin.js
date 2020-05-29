import mongoose from 'mongoose';

const coinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  symbol: {
    type: String,
    required: true,
    unique: true
  }
});

export default mongoose.model('Coin', coinSchema);
