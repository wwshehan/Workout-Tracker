const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();



const PORT = process.env.PORT || 8080
const db = require("./models")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useNewUrlParser: true})

require("./controller/api-routes.js")(app);
require("./controller/html-routes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});