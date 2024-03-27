const axios = require('axios');

exports.convert = async (amount, from, to) => {
  const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${from}`);
  const rate = response.data.rates[to];
  const convertedAmount = amount * rate;
  return { amount, from, to, convertedAmount };
};