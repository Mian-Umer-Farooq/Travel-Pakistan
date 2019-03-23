var express = require('express');
//var bodyParser = require("body-parser");

// var users = [
//     { id: 1, username: "umar", password: 'abcd1234' },
//     { id: 2, username: "test", password: '1234' },
// ]

var server = express()

// server.use(express.static('./build'))
// server.use(bodyParser.urlencoded({ extended: true }))
// server.use(bodyParser.json())

require('./db-config');
require('./all-routes')(server);

server.use((err, req, res, next) => {
    console.warn(err)
    res.status(500).send("Error Catched by error handler.")
})