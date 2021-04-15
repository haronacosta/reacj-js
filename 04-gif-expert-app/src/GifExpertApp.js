import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GridGifs from './components/GridGifs';

const GifExpertApp = () => {
  const initialCategories = ['One Puch'];

  const [categories, setCategories] = useState(initialCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category, i) => (
          <GridGifs key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
