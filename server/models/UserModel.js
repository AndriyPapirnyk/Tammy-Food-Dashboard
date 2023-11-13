const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
      },
      email: {
        type: String,
        // required: true
      },
      telephone: {
        type: String,
        // required: true
      },
      status: {
        type: String,
        // required: true
      },
      completedOrders: {
        type: Number,
        // required: true
      },
      login: {
        type: String,
        // required: true
      },
      password: {
        type: String,
        // required: true
      }
});

module.exports = mongoose.model('User', userSchema);