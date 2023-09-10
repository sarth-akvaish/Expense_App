const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userid: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"]
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        require: [true, "Category required"]
    },
    refernce: {
        type: String
    },
    description: {
        type: String,
        require: [true, 'desc is required']
    },
    date: {
        type: Date,
        require: true
    }
}, { timestamps: true })

const transactionModel = mongoose.model('transactions', transactionSchema)
module.exports = transactionModel;