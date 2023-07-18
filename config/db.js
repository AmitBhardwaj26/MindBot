const mongoose = require('mongoose');
const colors= require('colors');

// const dotenv = require('dotenv');
// dotenv.config();

const connectDB =async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
          
        });
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.log(`Error: ${error.message}`.red);
        process.exit(1);
    }
}
module.exports = connectDB;

