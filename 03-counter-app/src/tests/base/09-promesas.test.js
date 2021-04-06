import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas en el archivo 09-promesas.js', () => {
  test('getHeroeByIdAsync return a hero after 1.5 sec', (done) => {
    const id = 2;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual(heroes[1]);
      done();
    });
  });

  test('Debe regresar un error si el id del heroe no existe', (done) => {
    const id = 10;

    getHeroeByIdAsync(id).catch((e) => {
      expect(e).toBe('No se pudo encontrar el héroe');
      done();
    });
  });
});
