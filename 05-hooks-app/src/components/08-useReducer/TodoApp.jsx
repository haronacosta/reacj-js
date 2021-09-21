import React, { useEffect, useReducer } from 'react';

// Components
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import todoReducer from './todoReducer';

// Styles
import './style.css';

const TodoApp = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const handleDelete = (todoId) => {
    const action = { type: 'remove', payload: todoId };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    const action = { type: 'update', payload: todoId };

    dispatch(action);
  };

  const handleAddTodo = (newTodo) => {
    dispatch({ type: 'add', payload: newTodo });
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>
        TodoApp <small>({todos.length})</small>
      </h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>

        <div className='col-5'>
          <TodoForm handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
