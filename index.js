//Node API main file

const express = require("express"); //import express framework
const mongoose = require("mongoose"); //import mongoose library
const Product = require("./models/product.model.js"); //import model for saving to db
const productRoute = require("./routes/product.route.js"); //import routes
require("dotenv").config(); //Load environmental variables
const app = express(); //initialize app

//Variables
const db_Uname = process.env.DB_UNAME;
const db_Passwd = process.env.DB_PASSWD;

//Middleware
app.use(express.json()); //allow app to understand json data
app.use(express.urlencoded({extended: false})); //allow app to understand url encoded data

//Routes
app.use("/api/products", productRoute);

//Read
app.get("/", (req, res) => {
  //create a get response for the local server at '/'
  res.send("Hello from Node API Server Updated");
});

mongoose
  //connect to mongodb backend
  .connect(
    'mongodb+srv://'+db_Uname+':'+db_Passwd+'@nodedb.simsa4a.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NodeDB'
  )
  //if connection to db is successful, display connected to console,
  //start http server on port 3000, and say server is running
  //to console
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  //if connection to db fails, display connection failed to console
  .catch(() => {
    console.log("Connection failed.");
  });
