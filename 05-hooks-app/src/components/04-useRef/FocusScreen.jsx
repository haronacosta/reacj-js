import React, { useRef } from 'react';
import './focus.css';

export const FocusScreen = () => {
  const inputRef = useRef('');

  const handleClick = () => {
    document.querySelector('input');

    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>

      <input
        className='form-control mb-4'
        placeholder='Tu nombre...'
        ref={inputRef}
        type='text'
      />
      <button className='btn btn-outline-primary' onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
