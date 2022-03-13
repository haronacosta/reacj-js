import { useMemo } from 'react';

//Componets
import HeroCard from './HeroCard';

// Functions
import getHeroByPublisher from '../../selectors/getHeroByPublisher';

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <>
      <h2>Hero List</h2>

      <p className='text-warning'>Publisher: {publisher}</p>

      <div className='row row-cols-1 row-cols-md-2 g-4 animate__animated animate__fadeIn'>
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
};

export default HeroList;
