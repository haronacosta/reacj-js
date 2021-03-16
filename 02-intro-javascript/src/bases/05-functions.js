// Funciones en JS

const saludar = function saludar(nombre) {
  return `Hola ${nombre}`;
};

const saludar2 = (nombre) => `Hola ${nombre}`;

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));

const getUser = () => ({
  uuid: '123ABCD',
  username: 'hacosta',
});

console.log(getUser());

// Tarea

const getUserActive = (nombre) => ({
  uuid: 'ABCD1234',
  nombre,
});

const usuarioActivo = getUserActive('Haron');

console.log(usuarioActivo);
