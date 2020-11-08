const express = require('express');
const cors = require('cors');
const cards = require('./cards.min.js')

const app = express();
app.use(cors());

app.get('/', cors(), function(req, res) {
    res.header("Content-Type",'application/json');
    res.send(cards);
})

app.use('/sitemap.txt', express.static('./sitemap.txt'));

const port = process.env.PORT;

app.listen(port, function () {
    console.log('App is runnning on port ' + port)
})
