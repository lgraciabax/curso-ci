const express = require('express');
const router = express.Router();
const currencyController = require('../controllers/currencyController');


router.get('/convert-to-libra', (req, res) => {
    const {amount} = req.query;
    // Realiza la conversión a dólares estadounidenses (USD)
    const factorConversion = 0.04;
    convertedAmount = amount * 0.04; // 1 peso = 0.04 libras
    res.json({ amount, from, to: 'libras', convertedAmount })
});

router.get('/convert-to-quetzales', (req, res) => {
    const { amount } = req.query;


    const factorConversion = 0.44;

    const convertedAmount = amount * factorConversion;

    res.json({ amount, to: 'CNY', convertedAmount });
});

router.get('/convert-to-yuan', (req, res) => {
    const { amount } = req.query;


    const factorConversion = 0.44;

    const convertedAmount = amount * factorConversion;

   
    res.json({  convertedAmount });
});
//Este es USD
router.get('/convert-to-euros', (req, res) => {
    const { amount } = req.query;
    
    const factorConversion = 16.54;
    const convertedAmount = amount / factorConversion;
   
    res.json({  convertedAmount })
});
//Este es EUR
router.get('/convert-to-usd', (req, res) => {
    const { amount } = req.query;
    
    const factorConversion = 17.91;
    const convertedAmount = amount / factorConversion;
   
    res.json({  convertedAmount })
});


router.get('/convert-to-yen', (req, res) => {
    const { amount } = req.query;
    
    const factorConversion = 0.11;
    const convertedAmount = amount / factorConversion;
   
    res.json({  convertedAmount })
});
router.get('/convert-to-rupees',(req,res) => {
    const {amount} = req.query;

    const factorConversion = 5.04;
    const convertedAmount = amount*factorConversion;

    res.json({ convertedAmount })

});


router.get('/convert-to-cop',(req, res) =>{
    const { amount } = req.query;
    // conversion a Pesos colombianos
    const factorConversion = 0.0043;
    const convertedAmount = amount / factorConversion;

    res.json({ convertedAmount });
});

module.exports = router;
