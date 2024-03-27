const express = require('express');
const router = express.Router();
const currencyController = require('../controllers/currencyController');

router.get('/convert-to-quetzales', (req, res) => {
    const { amount, from } = req.query;
    // Realiza la conversión a quetzales (GTQ)
    let convertedAmount;
    if (from === 'USD') {
        convertedAmount = amount * 7.68; // 1 USD = 7.68 GTQ
    } else if (from === 'EUR') {
        convertedAmount = amount * 8.35; // 1 EUR = 8.35 GTQ
    } else {
        throw new Error('No se puede convertir desde la moneda especificada a Quetzales');
    }
    res.json({ amount, from, to: 'GTQ', convertedAmount });
});

router.get('/convert-to-euros', (req, res) => {
    const { amount, from } = req.query;
    // Realiza la conversión a euros (EUR)
    let convertedAmount;
    if (from === 'USD') {
        convertedAmount = amount * 0.92; // 1 USD = 0.92 EUR
    } else if (from === 'GTQ') {
        convertedAmount = amount * 0.12; // 1 GTQ = 0.12 EUR
    } else {
        throw new Error('No se puede convertir desde la moneda especificada a Euros');
    }
    res.json({ amount, from, to: 'EUR', convertedAmount });
});

router.get('/convert-to-usd', (req, res) => {
    const { amount, from } = req.query;
    // Realiza la conversión a dólares estadounidenses (USD)
    let convertedAmount;
    if (from === 'EUR') {
        convertedAmount = amount * 1.09; // 1 EUR = 1.09 USD
    } else if (from === 'GTQ') {
        convertedAmount = amount * 0.13; // 1 GTQ = 0.13 USD
    } else {
        throw new Error('No se puede convertir desde la moneda especificada a Dólares');
    }
    res.json({ amount, from, to: 'USD', convertedAmount });
});


module.exports = router;