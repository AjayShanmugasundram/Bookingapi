const express = require("express");
const mongo = require("./shared/connect")
const productRouter = require("./routes/products")
const registerRouter = require("./routes/register")
const app = express();

app.use(express.json());
mongo.connect()
app.use("/product",productRouter)
app.use("/register",registerRouter)
app.listen(3000);



