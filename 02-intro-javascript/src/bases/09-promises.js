import heroes from '../data/heroes';

// Get heros by ID
const getHeroById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroById(id);

      if (heroe) {
        resolve(heroe);
      } else {
        reject('No se encontro ningun heroe');
      }
    }, 2000);
  });
};

getHeroeByIdAsync(10)
  .then((heroe) => {
    console.log(heroe);
  })
  .catch((error) => {
    console.warn(error);
  });