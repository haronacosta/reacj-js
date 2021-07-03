import React from 'react';
import useFetch from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effect.css';

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter();

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote, author } = data ? data[0] : false;

  return (
    <div>
      <h1>Breaking Bad quotes</h1>

      <hr />

      {loading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <div>
          <figure className='text-end'>
            <blockquote className='blockquote'>
              <p>{quote}</p>
            </blockquote>
            <figcaption className='blockquote-footer'>{author}</figcaption>
          </figure>

          <button className='btn btn-primary' onClick={increment}>
            Next quote
          </button>
        </div>
      )}
    </div>
  );
};

export default MultipleCustomHooks;
