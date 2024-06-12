const express = require("express");
const app = express();
const port = 8000;


const loginRoute = require("./routes/login");
const signUpRoute = require("./routes/signup");
const UserRoute=require('./routes/user');
const db = require("./db/dbConfig");
app.get("/", (req, res) => res.send("Hello World!"));
app.use(express.json());

// const mongoSanitize = require('express-mongo-sanitize');
// // Use mongoSanitize middleware
// app.use(mongoSanitize());





app.use("/login",loginRoute);
app.use("/signup", signUpRoute);
app.use("/user",UserRoute);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
