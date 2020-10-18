const express = require('express');
const cors = require('cors');
const cards = require('./cards.js')

const app = express();
app.use(cors());

app.set('json spaces', 2)

app.get('/', cors(), (req, res) => {
    res.header("Content-Type",'application/json');
    res.send(cards);
})

app.use('/sitemap.txt', express.static('./sitemap.txt'));

const port = process.env.PORT;

app.listen(port, () => {
    console.log('App is runnning on port ' + port)
})
