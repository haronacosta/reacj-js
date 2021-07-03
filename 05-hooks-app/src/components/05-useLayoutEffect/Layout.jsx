import React, { useLayoutEffect, useRef, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effect.css';
import './layout.css';

const Layout = () => {
  const { counter, increment } = useCounter();

  const [boxSize, setBoxSize] = useState('');

  const pTag = useRef();

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = data ? data[0] : false;

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect</h1>

      <hr />

      <div>
        <figure className='text-end'>
          <blockquote className='blockquote'>
            <p className='mb-0' ref={pTag}>
              {quote}
            </p>
          </blockquote>
        </figure>

        <pre>{JSON.stringify(boxSize, null, 2)}</pre>

        <button className='btn btn-primary' onClick={increment}>
          Next quote
        </button>
      </div>
    </div>
  );
};

export default Layout;
