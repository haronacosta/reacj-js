import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifts';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    images: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((images) => {
      setState({
        images,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
