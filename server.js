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

server.listen(process.env.PORT || 8000, () => console.log("server is running"))
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});