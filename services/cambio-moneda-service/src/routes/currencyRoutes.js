router.get('/convert-to-yuan', (req, res) => {
    const { amount } = req.query;


    const factorConversion = 0.44;

    const convertedAmount = amount * factorConversion;

    res.json({ amount, to: 'CNY', convertedAmount });
});

router.get('/convert-to-yuan', (req, res) => {
    const { amount } = req.query;


    const factorConversion = 0.44;

    const convertedAmount = amount * factorConversion;

    res.json({ amount, to: 'CNY', convertedAmount });
});


module.exports = router;
