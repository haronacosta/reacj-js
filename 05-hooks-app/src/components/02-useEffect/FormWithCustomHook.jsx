import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import './effect.css';

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log('Email cambio');
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container'>
        <h1>Form with custom hook</h1>
        <hr />

        <div className='form-group mb-2'>
          <input
            type='text'
            name='name'
            className='form-control'
            placeholder='Tu nombre'
            autoComplete='off'
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group mb-2'>
          <input
            type='text'
            name='email'
            className='form-control'
            placeholder='tuemail@mail.com'
            autoComplete='off'
            value={email}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group mb-2'>
          <input
            type='password'
            name='password'
            className='form-control'
            placeholder='********'
            value={password}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <button className='btn btn-primary' type='submit'>
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormWithCustomHook;
