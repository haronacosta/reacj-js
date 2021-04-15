import React, { useState } from 'react';

const AddCategory = () => {
  const [inputValue, setInputValue] = useState('Hola Mundo');

  const handleInputChange = (e) => {
    const newInputValue = e.target.value;

    setInputValue(newInputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="newCategory"
        id="newCategory"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default AddCategory;
