const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'Los Angeles',
    zip: 50523,
    lat: 50.0,
    lon: 256664,
  },
};

// Spread Operator para crear un clon del objeto
const persona2 = { ...persona };

persona2.nombre = 'Peter';

console.log(persona);

console.log(persona2);
