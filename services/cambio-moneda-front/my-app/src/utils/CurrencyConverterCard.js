import React, { useState } from 'react';
 
function CurrencyConverterCard({ moneda, tasa }) {
  const [cantidad, setCantidad] = useState('');
  const [resultado, setResultado] = useState('');
 
  const handleConvertir = () => {
    const newValue = parseFloat(cantidad);
    if (!isNaN(newValue)) {
      const resultadoConversion = newValue * tasa;
      setResultado(resultadoConversion.toFixed(2));
    } else {
      setResultado('Cantidad inválida');
    }
  };
 
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Pesos a {moneda}</h5>
          <input
            type="number"
            className="form-control mb-2"
            placeholder="Cantidad en pesos"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
          <button className="btn btn-primary mb-2" onClick={handleConvertir}>
            Convertir
          </button>
          <label>Resultado: {resultado}</label>
        </div>
      </div>
    </div>
  );
}
 
export default CurrencyConverterCard;
 