const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h>hello from express</h>');
});

module.exports = router;