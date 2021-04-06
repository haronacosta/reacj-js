import { getImagen } from '../../base/11-async-await';

describe('Pruebas en el archivo 11-async-await', () => {
  test('Obteniendo la url de la imagen con getImagen', async () => {
    const url = await getImagen();

    expect(typeof url).toBe('string');
  });
});
