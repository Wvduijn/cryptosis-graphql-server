import mongoose from 'mongoose';

const investmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  }
});

export default mongoose.model('Investment', investmentSchema);
