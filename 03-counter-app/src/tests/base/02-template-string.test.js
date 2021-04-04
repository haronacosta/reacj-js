import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en el archivo 02-template-string.js', () => {
  test('Probando la funcion getSaludo pasandole argumentos', () => {
    const nombre = 'Haron';

    const saludo = getSaludo(nombre);

    expect(saludo).toBe(`Hola ${nombre}!`);
  });

  test('Probando la funcion getSaludo sin pasarle argumentos', () => {
    const saludo = getSaludo();

    expect(saludo).toBe(`Hola Carlos!`);
  });
});
