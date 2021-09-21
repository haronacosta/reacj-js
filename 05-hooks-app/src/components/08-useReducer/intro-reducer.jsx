const initialState = [
  {
    id: 1,
    todo: 'Hacer ejercicio',
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action?.type) {
    case 'add':
      return [...state, action.payload];
    default:
      break;
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Terminar sección de useReducer del curso de React',
  done: false,
};

// Payload es standard de los parametros del action
const action = {
  type: 'add',
  payload: newTodo,
};

todos = todoReducer(todos, action);

console.log(todos);
