const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


// inicindo o app
const app = express();

// iniciando o banco de dados mongodb
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

requireDir("./src/models");


const Product = mongoose.model('Product');

app.get('/', (req, res) => {
    Product.create({
        title: "React Aplication",
        description: "Product is fake for test",
        url: "http://example.com.br"
    })
    res.send('Hello Dev Master');
});


app.listen(3001);