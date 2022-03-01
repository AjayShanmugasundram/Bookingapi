//Room
var express = require ("express");
var app = express.Router();
var registerModule = require("../modules/registerModule")
 app.get("/get",registerModule.getData)
app.post("/signup",registerModule.signup) 
app.get("/avail",registerModule.available)



module.exports = app;