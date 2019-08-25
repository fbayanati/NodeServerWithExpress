const express = require('express');

let app = express();

app.get( '/', (req, res) => {
    res.status(200).send('Hello from Node/Express!');
});

app.listen( 3000, () => {
    console.log( 'Up and Running and Listening on port 3000 !');
})
