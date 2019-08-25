const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

let app = express();
app.use( morgan('tiny') );

app.get( '/', (req, res) => {
    res.status(200).send('Hello from Node/Express!');
});

app.listen( 3000, () => {
    console.log( `Up and Running and Listening on port ${chalk.green(3000)} !`);
})
