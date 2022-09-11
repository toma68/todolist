const express = require('express');
var http = require('http');

const app = express();
const port = 3000;

app.route('/').get((req, res) => {
    res.send('Hello World!');
});

//creer une route qui renvoie l'url de google
app.route('/test').get((req, res) => {
    res.sendfile('pages/test.html');
});

//lancer l'ecoute
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});