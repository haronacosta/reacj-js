import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  if (!hero) {
    return <Navigate to='/' />;
  }

  const handleReturn = () => {
    //Back to the previous page
    navigate(-1);
  };

  const imagePath = `/assets/heroes/${id}.jpg`;

  const { superhero, alter_ego, characters, first_appearance, publisher } =
    hero;

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          src={imagePath}
          alt={hero.superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>

      <div className='col-8'>
        <h3>{superhero}</h3>

        <ul className='list-group'>
          <li className='list-group-item'>
            <b>Alter ego: </b>
            {alter_ego}
          </li>

          <li className='list-group-item'>
            <b>Publisher: </b>
            {publisher}
          </li>

          <li className='list-group-item'>
            <b>First Appearance: </b>
            {first_appearance}
          </li>
        </ul>

        {characters && (
          <>
            <h5 className='mt-4'>Characters: </h5>
            <p>{characters}</p>
          </>
        )}

        <button className='btn btn-outline-info' onClick={handleReturn}>
          Back
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
