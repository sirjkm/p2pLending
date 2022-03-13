const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const borrowSchema = new Schema({
    username: { type: String, required: true },
    lender: { type: String, required: true },
    amount: { type: Number, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const borrow = mongoose.model('borrow', borrowSchema);

module.exports = borrow;