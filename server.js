const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const path = require('path');
const conn = require('./config/conn');
const app = express();
dotenv.config();

conn();
app.use(morgan('dev'))
app.use(express.json());
app.use(cors());


//routes
//user routes
app.use('/api/v1/users', require('./routes/userRoute'))


app.use(express.static(path.join(__dirname,'./client/build')));

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})
//Transaction routes
app.use('/api/v1/transactions', require('./routes/transactionRoutes'));

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})