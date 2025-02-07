const express = require('express');
const cors = require('cors');
const cards = require('./cards.min.js')

const app = express();
app.use(cors());

app.get('/', function(req, res) {
    res.header("Content-Type",'application/json');
    res.header('Access-Control-Allow-Origin', 'https://www.myintelicard.com')
    res.send(cards);
})

const port = process.env.PORT;

app.listen(port, function () {
    console.log('App is runnning on port ' + port)
})
