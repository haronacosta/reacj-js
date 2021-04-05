import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en el archivo 08-imp-exp.js, funciones que retornan los heroes', () => {
  test('Pruebas en la funcion getHeroeById, me debe retornar un heroe por id', () => {
    const id = 2;

    const heroe = getHeroeById(id);

    const heroesData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroesData);
  });

  test('Pruebas en la funcion getHeroeById, me debe retornar undefined si no consigue el id', () => {
    const id = 10;

    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  //  Usando filter para traer a los heroes de DC
  test('Pruebas en la funcion getHeroesByOwner, retornar solo los heroes de DC', () => {
    const owner = 'DC';

    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter((h) => h.owner === owner);

    expect(heroes).toEqual(heroesData);
  });

  //  Usando lenght para traer a los heroes de Marvel
  test('Pruebas en la funcion getHeroesByOwner, retornar solo los heroes de Marvel y comprobar que sean iguales', () => {
    const owner = 'Marvel';

    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
  });
});
