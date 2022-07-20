// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// app.get("/home", (req, res) => {
//     res.json({ message: "Movie API application" });
//   });
  

// app.listen(3000, () => {
//     console.log("Server is running on port 3000.");
// });

import express from "express";
import cors from "cors";
import db from "./config/db.js";
import Router from "./routes/routes.js";

const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// use router
app.use(Router);
 
// listen on port
app.listen(5000, () => console.log('Server running at http://localhost:5000'));
 