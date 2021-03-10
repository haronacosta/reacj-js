// Destructuración
const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  clave: 'Ironman',
  edad: 45,
};

// const { nombre } = persona;

// console.log(nombre);

const person = ({ nombre, apellido, clave, rango = 'Capitán', edad }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latLong: {
      lat: 5000,
      lon: 4500,
    },
  };
};

const {
  nombreClave,
  anios,
  latLong: { lat, lon },
} = person(persona);

console.log(nombreClave, anios, lat, lon);
