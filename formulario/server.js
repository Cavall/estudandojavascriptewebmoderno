const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.post('/usuarios', (req, resp) => {
    console,console.log(req.body);
    resp.send('<h1>PARABENS</h1>')
})

app.listen(3003);