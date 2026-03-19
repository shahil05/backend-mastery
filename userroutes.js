const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
    res.send("this is my backend journey");
});

router.get('/hello', (req, res) => {
    res.send("Hello Sahil 👋");
});

module.exports = router;