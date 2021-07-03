import React, { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';
import './focus.css';

const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Real example ref</h2>

      <hr />

      {show && <MultipleCustomHooks />}

      <button
        className='btn btn-outline-info mt-5'
        onClick={() => setShow(!show)}
      >
        Show/ Hide
      </button>
    </div>
  );
};

export default RealExampleRef;
