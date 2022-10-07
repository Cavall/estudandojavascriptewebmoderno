const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.post('/usuarios', (req, resp) => {
    console.log(req.body);
    resp.send('<h1>PARABENS USUARIO INCLUIDO</h1>')
})

//incluindo codigo para compatibilizar uso de alterar dados pelo button alterar
app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id);
    console.log(req.body);
    resp.send('<h1>PARABENS USUARIO ALTERADO</h1>')
})



app.listen(3003);