let mongoose = require("mongoose");
require("dotenv").config();
var host = process.env.HOST 

mongoose.connect(host, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
 

mongoose.set("useCreateIndex", true);