import heroes, { owners } from '../data/heroes';

// Get heros by ID
const getHeroById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

console.log(owners);

// Get heros by owner
const getHeroByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};

console.log(getHeroByOwner('DC'));
