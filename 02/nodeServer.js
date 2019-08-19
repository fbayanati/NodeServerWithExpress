/*eslint no-undef: "error"*/
/*eslint-env node*/

const express = require("express");
const bodyParser = require("body-parser");

const productRoutes = require("./routes/products");

const app = express();

app.use( bodyParser.json() );   // application/json

/** Add the CORS header in the response */
app.use( (req, res, next) => {
    res.setHeader( "Access-Control-Allow-Origin", "*" );
    res.setHeader( "Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE" );
    res.setHeader( "Access-Control-Allow-Headers", "Content-Type, Authorization, Accept, X-Requested-With, remember-me" );
    next();
});

app.use("/call", productRoutes);

app.listen( 8080 );
