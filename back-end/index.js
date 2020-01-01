const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;

// Import routes
const apiRoutes = require("./api-routes");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/fifa-tournament", {
    useNewUrlParser: true,
});

const db = mongoose.connection;
if (!db) {
    console.error("Error connecting to database")
} else {
    console.log("Connection to database is successful");
}

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log("Express is listening on port: " + port);
});
