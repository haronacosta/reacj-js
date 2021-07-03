import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

import '../02-useEffect/effect.css';

const Memorize = () => {
  const { counter, increment } = useCounter(1000);

  const [show, setShow] = useState(false);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook - useMemo</h1>
      <h3>
        Counter:
        <small>{counter}</small>
      </h3>

      <p>{memoProcesoPesado}</p>
      <hr />

      <button className='btn btn-primary' onClick={increment}>
        +1
      </button>

      <button className='btn btn-success ms-3' onClick={() => setShow(!show)}>
        Show/ Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memorize;
