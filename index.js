const express = require('express');

const mongoose = require('mongoose');



// inicindo o app
const app = express();

// iniciando o banco de dados mongodb
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });


app.get('/', (req, res) => {
    res.send('Hello Dev Master');
});




app.listen(3001);