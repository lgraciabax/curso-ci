
import React from 'react';

function CurrencyConverterCard({ moneda, resultado }) {

  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Pesos a {moneda}</h5>

          <label>Resultado: {resultado}</label>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverterCard;

