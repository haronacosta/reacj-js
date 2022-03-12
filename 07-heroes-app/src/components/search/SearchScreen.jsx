import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { getHerobyName } from '../../selectors/getHerobyName';
import HeroCard from '../hero/HeroCard';

const SearchScreen = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const initialSearch = {
    searchValue: q,
  };

  const [{ searchValue }, handleInputChange] = useForm(initialSearch);

  const heroesFiltered = useMemo(() => getHerobyName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`?q=${searchValue}`);
  };

  return (
    <>
      <h4>Search a hero</h4>

      <hr />

      <div className='row'>
        <div className='col-5'>
          <h5>Search</h5>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              className='form-control mb-4'
              type='text'
              name='searchValue'
              target='searchValue'
              placeholder='Search hero'
              autoComplete='off'
              value={searchValue}
              onChange={handleInputChange}
            />

            <button type='submit' className='btn btn-primary'>
              Search...
            </button>
          </form>
        </div>

        <div className='col-7'>
          <h5>Results</h5>

          <hr />

          {q === '' ? (
            <div className='alert alert-info'>
              <p>Please, type a name to search a hero.</p>
            </div>
          ) : (
            heroesFiltered.length === 0 && (
              <div className='alert alert-danger'>Not results</div>
            )
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
