import { heroes } from '../data/heroes';

const getHeroByPublisher = (publisher) => {
  const validPublisher = ['Marvel Comics', 'DC Comics'];

  if (!validPublisher.includes(publisher)) {
    throw new Error('Must provide a valid publisher');
  }
  return heroes.filter((hero) => hero.publisher === publisher);
};

export default getHeroByPublisher;
