import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const { loading, images } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading ? (
        <h6 className="animate__animated animate__pulse">Cargando... </h6>
      ) : (
        <div className="card-grid">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      )}
    </>
  );
};

export default GifGrid;
