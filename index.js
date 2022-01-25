const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const coursesRouter = require('./routes/courses')
require("dotenv").config()
const app = express();

app.use(bodyParser.json());
app.use('/api/v1/courses', coursesRouter);

mongoose.connect(process.env.DB_CONNECTION_URL, () => {
    console.log('connected to db');
})

app.listen(process.env.PORT, () => {
    console.log('server up and running at ' + 2000);
})