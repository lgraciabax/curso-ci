import React, { useState } from 'react';
import CurrencyConverterCard from '../utils/CurrencyConverterCard.js';

function MainCard() {
    const [cantidad, setCantidad] = useState('');
    const [resultadoDolares, setResultadoDolares] = useState('');
    const [resultadoEuros, setResultadoEuros] = useState('');
    const [resultadoQuetzales, setResultadoQuetzales] = useState('');
    const [resultadoYenes, setResultadoYenes] = useState('');
    const [resultadoLibra, setResultadoLibra] = useState('');
    const [resultadoRupia, setResultadoRupia] = useState('');
    const [resultadoYuan, setResultadoYuan] = useState('');
    const [resultadoPesoColombiano, setResultadoPesoColombiano] = useState('');
  
    const handleConvertirDolares = () => {
      const newValue = parseFloat(cantidad);
      if (!isNaN(newValue)) {
        setResultadoDolares((newValue * 0.051).toFixed(2));
      } else {
        setResultadoDolares('Cantidad inválida');
      }
    };
  
    const handleConvertirEuros = () => {
      const newValue = parseFloat(cantidad);
      if (!isNaN(newValue)) {
        setResultadoEuros((newValue * 0.045).toFixed(2));
      } else {
        setResultadoEuros('Cantidad inválida');
      }
    };
  
    const handleConvertirQuetzales = () => {
      const newValue = parseFloat(cantidad);
      if (!isNaN(newValue)) {
        setResultadoQuetzales((newValue * 0.39).toFixed(2));
      } else {
        setResultadoQuetzales('Cantidad inválida');
      }
    };
  
    const handleConvertirYenes = () => {
      const newValue = parseFloat(cantidad);
      if (!isNaN(newValue)) {
        setResultadoYenes((newValue * 5.27).toFixed(2));
      } else {
        setResultadoYenes('Cantidad inválida');
      }
    };
  
    const handleConvertirLibra = () => {
      const newValue = parseFloat(cantidad);
      if (!isNaN(newValue)) {
        setResultadoLibra((newValue * 0.036).toFixed(2));
      } else {
        setResultadoLibra('Cantidad inválida');
      }
    };
  
    const handleConvertirRupia = () => {
      const newValue = parseFloat(cantidad);
      if (!isNaN(newValue)) {
        setResultadoRupia((newValue * 4.54).toFixed(2));
      } else {
        setResultadoRupia('Cantidad inválida');
      }
    };
  
    const handleConvertirYuan = () => {
      const newValue = parseFloat(cantidad);
      if (!isNaN(newValue)) {
        setResultadoYuan((newValue * 0.32).toFixed(2));
      } else {
        setResultadoYuan('Cantidad inválida');
      }
    };
  
    const handleConvertirPesoColombiano = () => {
      const newValue = parseFloat(cantidad);
      if (!isNaN(newValue)) {
        setResultadoPesoColombiano((newValue * 161.82).toFixed(2));
      } else {
        setResultadoPesoColombiano('Cantidad inválida');
      }
    };
  
    const handleConvertirTodas = () => {
      const newValue = parseFloat(cantidad);
      if (!isNaN(newValue)) {
        setResultadoDolares((newValue * 0.051).toFixed(2));
        setResultadoEuros((newValue * 0.045).toFixed(2));
        setResultadoQuetzales((newValue * 0.39).toFixed(2));
        setResultadoYenes((newValue * 5.27).toFixed(2));
        setResultadoLibra((newValue * 0.036).toFixed(2));
        setResultadoRupia((newValue * 4.54).toFixed(2));
        setResultadoYuan((newValue * 0.32).toFixed(2));
        setResultadoPesoColombiano((newValue * 161.82).toFixed(2));
      } else {
        setResultadoDolares('Cantidad inválida');
        setResultadoEuros('Cantidad inválida');
        setResultadoQuetzales('Cantidad inválida');
        setResultadoYenes('Cantidad inválida');
        setResultadoLibra('Cantidad inválida');
        setResultadoRupia('Cantidad inválida');
        setResultadoYuan('Cantidad inválida');
        setResultadoPesoColombiano('Cantidad inválida');
      }
    };

  return (
    <div className="card w-80 mx-auto">
      <div className="card-body">
        <h5 className="card-title">Main Card</h5>
        <p className="card-text">This is the main card content.</p>
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Cantidad en pesos"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />
        <button className="btn btn-primary mb-2" onClick={handleConvertirDolares}>
          Convertir a Dólares
        </button>
        <button className="btn btn-primary mb-2" onClick={handleConvertirEuros}>
          Convertir a Euros
        </button>
        <button className="btn btn-primary mb-2" onClick={handleConvertirQuetzales}>
          Convertir a Quetzales
        </button>
        <button className="btn btn-primary mb-2" onClick={handleConvertirYenes}>
          Convertir a Yenes
        </button>
        <button className="btn btn-primary mb-2" onClick={handleConvertirLibra}>
          Convertir a Libra
        </button>
        <button className="btn btn-primary mb-2" onClick={handleConvertirRupia}>
          Convertir a Rupia
        </button>
        <button className="btn btn-primary mb-2" onClick={handleConvertirYuan}>
          Convertir a Yuan
        </button>
        <button className="btn btn-primary mb-2" onClick={handleConvertirPesoColombiano}>
          Convertir a peso colombiano
        </button>
        <button className="btn btn-primary mb-2" onClick={handleConvertirTodas}>
          Convertir a todas las monedas
        </button>
        
        <div className="row">
          <CurrencyConverterCard moneda="Dólares" resultado={resultadoDolares} />
          <CurrencyConverterCard moneda="Euros" resultado={resultadoEuros} />
          <CurrencyConverterCard moneda="Quetzales" resultado={resultadoQuetzales} />
          <CurrencyConverterCard moneda="Yenes" resultado={resultadoYenes} />
          <CurrencyConverterCard moneda="Libra" resultado={resultadoLibra} />
          <CurrencyConverterCard moneda="Rupia" resultado={resultadoRupia} />
          <CurrencyConverterCard moneda="Yuan" resultado={resultadoYuan} />
          <CurrencyConverterCard moneda="Pesos Colombiano" resultado={resultadoPesoColombiano} />

        </div>
      </div>
    </div>
  );
}

export default MainCard;

