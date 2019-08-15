const express = require("express");
const bodyParser = require("body-parser");

const productRoutes = require("./routes/products");

const app = express();

app.use( bodyParser.json() );   // application/json
app.use("/call", productRoutes);

app.listen( 8080 );
