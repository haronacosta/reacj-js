const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, personaje2] = personajes;

console.log(personaje2);

const uState = (valor) => {
  return [valor, () => console.log('Hola mundo')];
};

const [nombre, setNombre] = uState('Haron');

console.log(nombre);

console.log(setNombre);
