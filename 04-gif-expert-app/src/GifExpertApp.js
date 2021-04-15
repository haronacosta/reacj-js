import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
  const initialCategories = ['One Puch', 'Samurai X', 'Hunter x Hunter'];

  const [categories, setCategories] = useState(initialCategories);

  const handleAdd = () => {
    // Otra manera del useState
    setCategories((cat) => [...cat, 'Naruto']);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categories.map((category, i) => (
          <li key={i}>{category}</li>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
