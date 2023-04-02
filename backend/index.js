const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

const connectedLocalDb = require('./configs/db');
const userRouter = require('./routes/user.routes');
const { notesRouter } = require('./routes/note.routes');
const { authenticate } = require('./middleware/auth.middleware');
require("dotenv").config() // using .env for port and db
const app = express();
app.use(cors())
app.use(express.json()); // ==> important;

app.use("/users", userRouter)

app.use(authenticate)
app.use("/notes", notesRouter )



// exporting the app
module.exports = app

app.listen(process.env.port , async() =>{
    try {
        await connectedLocalDb
        console.log("connected to mongodb");
    } catch (error) {
        console.log("not connected to mongodb");
        console.log(error);
    }
    console.log(`Server is running on port ${process.env.port}`);
});