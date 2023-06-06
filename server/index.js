const express = require("express");
require('dotenv').config({path:'./.env'})
const db = require("./db");
const port = 7757

const app = express();

// middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/post", require("./routes/post.routes"));



// Lancer le serveur
app.listen(port, ( ) =>console.log ("Le serveur a démarré au port " + port))
