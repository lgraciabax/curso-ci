const express = require('express');
const router = express.Router();
const currencyController = require('../controllers/currencyController');

router.get('/convert-to-quetzales', (req, res) => {
    const { amount } = req.query;
    // Realiza la conversión a quetzales (GTQ)
    const factorConversion = 0.47;
    const convertedAmount = amount * factorConversion;
   
    res.json({  convertedAmount });
});

router.get('/convert-to-euros', (req, res) => {
    const { amount } = req.query;
    // Realiza la conversión a quetzales (GTQ)
    const factorConversion = 16.54;
    const convertedAmount = amount / factorConversion;
   
    res.json({  convertedAmount });
});

router.get('/convert-to-usd', (req, res) => {
    const { amount } = req.query;
    // Realiza la conversión a quetzales (GTQ)
    const factorConversion = 17.91;
    const convertedAmount = amount / factorConversion;
   
    res.json({  convertedAmount });
});


router.get('/convert-to-cop',(req, res) =>{
    const { amount } = req.query;
    // conversion a Pesos colombianos
    const factorConversion = 0.0043;
    const convertedAmount = amount / factorConversion;
    console.log("Iniciaste conversio a Pesos Colombianos")

    res.json({ convertedAmount });
});

module.exports = router;