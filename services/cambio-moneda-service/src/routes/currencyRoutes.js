const express = require('express');
const router = express.Router();
const currencyController = require('../controllers/currencyController');

router.get('/convert-to-quetzales', (req, res) => {
    const { amount } = req.query;
   
    const factorConversion = 0.47;
    const convertedAmount = amount * factorConversion;
   
    res.json({  convertedAmount });
});

router.get('/convert-to-euros', (req, res) => {
    const { amount } = req.query;
    
    const factorConversion = 16.54;
    const convertedAmount = amount / factorConversion;
   
    res.json({  convertedAmount });
});

router.get('/convert-to-usd', (req, res) => {
    const { amount } = req.query;
    
    const factorConversion = 17.91;
    const convertedAmount = amount / factorConversion;
   
    res.json({  convertedAmount });
});

router.get('/convert-to-yuan', (req, res) => {
    const { amount } = req.query;


    const factorConversion = 0.44;

    const convertedAmount = amount * factorConversion;

    res.json({ amount, to: 'CNY', convertedAmount });
});


module.exports = router;