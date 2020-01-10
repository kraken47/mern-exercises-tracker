const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const port = process.env.PORT || 5000;
require('./db');

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/main')(app);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});

module.exports = app;