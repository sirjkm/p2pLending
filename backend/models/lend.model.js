const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lendSchema = new Schema({
    username: { type: String, required: true },
    amount: { type: Number, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const lend = mongoose.model('lend', lendSchema);

module.exports = lend;