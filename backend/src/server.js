const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoDbPath = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1"; // Replace 'my_database' with your actual database name

     
mongoose.connect(mongoDbPath, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    
    app.get("/", function(req, res) {
        const response = { statuscode: res.statusCode, message: "API Works!" };
        res.json(response);
    });
    
    const noteRouter = require('./routes/Note');
    app.use("/notes", noteRouter);
    
    // Starting the server on a PORT
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, function() {
        console.log("Server started at PORT: " + PORT);
    });
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error.message);
  });
