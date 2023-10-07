const functions = require("firebase-functions");
const express = require("express");

const admin = require("firebase-admin")

admin.initializeApp(functions.config().firebase)
// // once you have the admin initialized then can access other parts of project
// // say the real time database 
// const realTimeDB = admin.database();
// const userRef = realTimeDB.ref("users").child("user_uid_or_such_here");


const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ data: "sourcgin say hello..." });
});

const router = require('./routers');
var cors = require('cors')
var bodyParser = require("body-parser");

app.use('/uploads', express.static('uploads'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use('/', router);

exports.app = functions.https.onRequest(app);

