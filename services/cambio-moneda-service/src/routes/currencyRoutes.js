const express = require('express');
const router = express.Router();
const currencyController = require('../controllers/currencyController');


router.get('/convert-to-libra', (req, res) => {
    const {amount,from} = req.query;
    // Realiza la conversión a dólares estadounidenses (USD)
    if(amount=!null){
    convertedAmount = amount * 0.04; // 1 peso = 0.04 libras
    }
    else {
        throw new Error('No se puede convertir desde la moneda especificada a libras');
    }
    res.json({ amount, from, to: 'libras', convertedAmount });
});

module.exports = router;