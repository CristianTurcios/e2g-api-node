const express = require("express");
const config = require('./config.js');
const { getDocument, getDocuments } = require('./resolvers/getData');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/documents/:collectionId', function (req, res) {
    getDocuments(req.params.collectionId).then(response => {
        res.send(response);
    });
});

app.get('/document/:collectionId/:id', function (req, res) {
    getDocument(req.params.collectionId, req.params.id).then(response => {
        res.send(response);
    });
});


app.listen(config.PORT, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});