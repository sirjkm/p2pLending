const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const getLoanSchema = new Schema({
    username: { type: String, required: true },
    amount: { type: Number, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const getLoan = mongoose.model('getLoan', getLoanSchema);

module.exports = getLoan;