import React from 'react';
import PropTypes from 'prop-types';

function PrimeraApp({ saludo, subtitulo }) {
  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  );
}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};
export default PrimeraApp;
