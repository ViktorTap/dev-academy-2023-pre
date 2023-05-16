require("dotenv").config();
const express = require('express')
const app = express();

const pool = require('./db');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.ORIGIN);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use(express.json());

app.use('/stations', require('./routes/stationRoutes.js'));

app.use('/', require('./routes/journeyRoutes.js'));

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something broke!');
})

const server = app.listen(8080, () => {
    console.log('Server is running on port 8080')
})

module.exports = {app, server}