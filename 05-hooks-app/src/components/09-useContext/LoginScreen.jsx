import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  //1. Obtener la referencia al context
  const { setUser } = useContext(UserContext);
  // 2. setUser

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={() => {
          setUser({
            id: 1,
            name: 'Haron',
          });
        }}
      >
        Login
      </button>
    </div>
  );
};
