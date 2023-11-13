const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    order: Array,
    clientInfo: Object,
    totalPrice: String,
    ordersDate: String,
    ordersNumber: String,
    status: String,
});

module.exports = mongoose.model('Order', orderSchema);