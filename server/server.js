const express= require("express");
const path = require('path');
const cors = require('cors');
const app= express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
app.use(cors());

dotenv.config();
connectDB();
const port = 8000;

const mailRouter = require("./routes/emailRout");
console.log('mailRouter is:', mailRouter);

app.use(express.json());
app.use(express.static('public'));  // serve index.html automatically

app.use("/api/mail", mailRouter);
const letterRouter = require("./routes/letterRouts");
app.use("/api/letter", letterRouter);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
