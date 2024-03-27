import React from 'react';
import CurrencyConverterCard from '../utils/CurrencyConverterCard.js';
 
function MainCard() {
  return (
    <div className="card w-80 mx-auto">
      <div className="card-body">
        <h5 className="card-title">Conversor</h5>
        <p className="card-text">Ingresa una cantidad.</p>
        <div className="row">
          <CurrencyConverterCard moneda="Dólares" />
          <CurrencyConverterCard moneda="Euros" />
          <CurrencyConverterCard moneda="Quetzales" />
          <CurrencyConverterCard moneda="Yenes" />
          <CurrencyConverterCard moneda="Libra" />
          <CurrencyConverterCard moneda="Rupia" />
          <CurrencyConverterCard moneda="Yuan" />
          <CurrencyConverterCard moneda="Peso Colombiano" />
        </div>
      </div>
    </div>
  );
}
 
export default MainCard;