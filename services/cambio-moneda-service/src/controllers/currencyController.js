const currencyService = require('../services/currencyService');

exports.convert = async (req, res) => {
  try {
    const { amount, from, to } = req.query;
    const result = await currencyService.convert(amount, from, to);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};