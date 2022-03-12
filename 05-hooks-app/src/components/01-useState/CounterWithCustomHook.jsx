import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(50);
  return (
    <>
      <div className='container'>
        <h1>Counter with hook: {counter}</h1>
        <hr />

        <button className='btn btn-primary m-3' onClick={() => increment(2)}>
          +1
        </button>

        <button className='btn btn-info m-3' onClick={reset}>
          Reset
        </button>

        <button className='btn btn-success m-3' onClick={() => decrement(2)}>
          -1
        </button>
      </div>
    </>
  );
};

export default CounterWithCustomHook;
