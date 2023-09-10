const mongoose = require('mongoose');
const color = require('colors');


const conn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Server running on ${mongoose.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`${error}`.bgRed);
    }
}

module.exports = conn