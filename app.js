require('dotenv').config();
const express = require('express');
const {connectDB} = require('./config/db')

//init & middleware
const test = express();
test.use(express.json());

//database
connectDB();

//routes
require('./routes/students')(test);

test.get ('/', (req,res) => {
    res.send('Test API Running')
});

//port
const PORT = process.env.PORT;

test.listen(PORT, () => {
    console.log("Stay dialed on")
})