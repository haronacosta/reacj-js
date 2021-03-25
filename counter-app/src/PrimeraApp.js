import React from 'react';

const PrimeraApp = ({ saludo = 'Hola soy el valor por defecto' }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>Parrafo de mi primera app</p>
    </>
  );
};

export default PrimeraApp;
