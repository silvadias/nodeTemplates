const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is a required field'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is a required field'],
    unique: true,
    lowercase: true,
    trim: true
  }
}, {

  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('User', UserSchema);
