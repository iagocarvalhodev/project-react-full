const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


// inicindo o app
const app = express();

// iniciando o banco de dados mongodb
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

requireDir("./src/models");

const Product = mongoose.model('Product');

app.use('/api', require("./src/routes"));



app.listen(3001);