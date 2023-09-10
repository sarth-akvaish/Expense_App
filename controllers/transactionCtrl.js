const moment = require('moment/moment');
const transactionModel = require('../models/TransactionModel');

const getAllTrans = async (req, res) => {
    try {
        const { frequency, selectedDate, type } = req.body
        const trans = await transactionModel.find({
            ...(frequency !== 'custom' ? {
                date: {
                    $gt: moment().subtract(Number(frequency), 'd').toDate()
                },
            } : {
                date: {
                    $gte: selectedDate[0],
                    $lte: selectedDate[1]
                },
            }),
            userid: req.body.userid,
            ...(type !== 'all' && { type })
        })
        res.status(200).json(trans);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}

const delTrans = async (req, res) => {
    try {
        await transactionModel.findOneAndDelete({ _id: req.body.transactionId })
        res.status(200).send("Transaction Deleted");
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

const editTrans = async (req, res) => {
    try {
        await transactionModel.findOneAndUpdate({ _id: req.body.transactionId }, req.body.payload);
        res.status(200).send("Edit successfully");
    } catch (e) {
        console.log(e);
        res.status(500).json(e)
    }
}
const addTrans = async (req, res) => {
    try {
        const newTrans = new transactionModel(req.body)
        await newTrans.save()
        res.status(201).send('Transaction Created');
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}


module.exports = { getAllTrans, addTrans, editTrans, delTrans };