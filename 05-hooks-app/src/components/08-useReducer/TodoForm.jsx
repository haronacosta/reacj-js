import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';

const TodoForm = ({ handleAddTodo }) => {
  const [state, setState] = useState({ error: false });

  const { error } = state;

  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length < 3) {
      setState({ ...state, error: true });
      setTimeout(() => {
        setState({ ...state, error: false });
      }, 3000);
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);

    reset();
  };
  return (
    <>
      <h4>Agregar TODO</h4>

      <hr />

      <form onSubmit={handleSubmit}>
        <input
          className='form-control'
          type='text'
          name='description'
          placeholder='Todo...'
          autoComplete='off'
          value={description}
          onChange={handleInputChange}
        />

        <button className='btn btn-outline-primary w-100 mt-2' type='submit'>
          Agregar
        </button>
      </form>

      {error && (
        <div className='alert alert-danger mt-3' role='alert'>
          Ingrese una descripción valida
        </div>
      )}
    </>
  );
};

export default TodoForm;
