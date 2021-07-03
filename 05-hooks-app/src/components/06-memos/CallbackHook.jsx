import React, { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';

import '../02-useEffect/effect.css';

const CallbackHook = () => {
  const [counter, setCounter] = useState(0);

  // const increment = () => {

  // };

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <>
      <h1>UseCallback</h1>

      <hr />

      <p>{counter}</p>

      <ShowIncrement increment={increment} />
    </>
  );
};

export default CallbackHook;
