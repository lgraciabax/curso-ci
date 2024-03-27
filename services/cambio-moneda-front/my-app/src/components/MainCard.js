import React from 'react';
import CurrencyConverterCard from '../utils/CurrencyConverterCard.js';
 
function MainCard() {
  return (
    <div className="card w-80 mx-auto">
      <div className="card-body">
        <h5 className="card-title">Conversor</h5>
        <p className="card-text">Ingresa una cantidad.</p>
        <div className="row">
          <CurrencyConverterCard moneda="Dólares" tasa={0.051} />
          <CurrencyConverterCard moneda="Euros" tasa={0.045} />
          <CurrencyConverterCard moneda="Quetzales" tasa={0.39} />
        </div>
      </div>
    </div>
  );
}
 
export default MainCard;