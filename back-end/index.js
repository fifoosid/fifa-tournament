const app = require('express')();
const cors = require('cors');
const http = require('http');
const server = http.Server(app);
const io = require('socket.io')(server);
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
app.use('/api', cors(), apiRoutes);

// socket.io
io.on('connection', (socket) => {
    socket.on('new-game-added', (gameDetails) => {
        console.log(gameDetails);
        socket.broadcast.emit('new-game-notification', gameDetails);
    });
});

server.listen(port, () => {
    console.log("Express is listening on port: " + port);
});
