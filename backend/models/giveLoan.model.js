const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const giveLoanSchema = new Schema({
    username: { type: String, required: true },
    amount: { type: Number, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const giveLoan = mongoose.model('giveLoan', giveLoanSchema);

module.exports = giveLoan;