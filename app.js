const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware here');
    res.send('<h>Add Product Page</h>');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware here');
    res.send('<h>hello from express</h>');
});

app.listen(3000);