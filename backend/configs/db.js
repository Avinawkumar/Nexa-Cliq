const mongoose  = require('mongoose');
require("dotenv").config()

const connectedLocalDb = mongoose.connect(process.env.mongo_URL)



module.exports = connectedLocalDb
