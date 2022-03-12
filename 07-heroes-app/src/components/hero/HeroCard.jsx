import { Link } from 'react-router-dom';

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imagePath = `/assets/heroes/${id}.jpg`;
  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card'>
        <div className='row g-4'>
          <div className='col-4'>
            <img src={imagePath} alt={superhero} className='card-img-top' />
          </div>

          <div className='col-8'>
            <div className='card-title'>{superhero}</div>
            <p className='card-text'>{alter_ego}</p>
            {alter_ego !== characters && (
              <p className='text-muted'>{characters}</p>
            )}
            <p className='card-text'>{first_appearance}</p>

            <Link to={`/hero/${id}`} className='pl-4 btn btn-outline-success'>
              Más info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
