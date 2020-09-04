import mongoose from 'mongoose';
import md5 from 'md5';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'username required'],
    unique: [true, 'username already exists'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'email required'],
    unique: [true, 'email already exists'],
    trim: true
  },

  password: {
    required: [true, 'password required'],
    type: String
  },
  avatar: {
    type: String,
    required: false
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  lastActive: {
    type: Date,
  },
  watchList: {
    type: [String]
  }
  // watchList: {
  //   type: [mongoose.Schema.Types.ObjectId],
  //   required: false,
  //   ref: 'Coin'
  // }
});

// Create and add avatar to user
UserSchema.pre('save', function(next) {
  this.avatar = `https://gravatar.com/avatar/${md5(this.username)}?d=robohash`;
  next();
});

export default mongoose.model('User', UserSchema);
