const express = require('express');
const { editTrans, addTrans, getAllTrans,delTrans } = require('../controllers/transactionCtrl');

// router object

const router = express.Router();

//routes

//add transaction 
router.post('/add-transaction', addTrans);


router.post('/edit-transaction', editTrans);


router.post('/delete-transaction', delTrans);


//get transaction
router.post('/get-transaction', getAllTrans);

module.exports = router