import React, { useState } from 'react';
import './Switch.css';

const Switch = () => {
  const [activado, setActivado] = useState(false);

  const toggleSwitch = () => {
    setActivado(!activado);
  };

  return (
    <div className={`switch w-32 justify-self-start ${activado ? 'activado' : 'desactivado'}`} onClick={toggleSwitch}>
      <div className={`barra ${activado ? 'barra-on' : 'barra-off'}`}></div>
      <div className={`circulo ${activado ? 'circulo-on' : 'circulo-off'}`}></div>
      <p className="text-sm bold">{activado ? 'Activado' : 'Desactivado'}</p>
    </div>
  );
};

export default Switch;