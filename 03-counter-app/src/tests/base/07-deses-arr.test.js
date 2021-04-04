import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas al archivo 07-deses-arr', () => {
  test('retornaArreglo debe regresar un array', () => {
    const [string, number] = retornaArreglo();

    expect(string).toBe('ABC');
    expect(typeof string).toBe('string');

    expect(number).toBe(123);
    expect(typeof number).toBe('number');
  });
});
