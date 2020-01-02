const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;

// Mongoose + body-parser
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/fifa-tournament", {
    useNewUrlParser: true,
});

// DB connection
const db = mongoose.connection;
if (!db) {
    console.error("Error connecting to database")
} else {
    console.log("Connection to database is successful");
}

// Routing
const apiRoutes = require("./api-routes");
app.use('/api', apiRoutes);

// socket.io
io.on('connection', function(socket){
    console.log('a user connected');
});

app.listen(port, () => {
    console.log("Express is listening on port: " + port);
});
