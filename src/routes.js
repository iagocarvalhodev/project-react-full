const express = require('express');
const routes = express.Router();


routes.get('/', (req, res) => {
    // Product.create({
    //     title: "React Aplication",
    //     description: "Product is fake for test",
    //     url: "http://example.com.br"
    // })
    res.send('Hello Dev Master');
});

module.exports = routes;