import React, { useEffect, useState } from 'react';

const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const { x, y } = coords;

  const mouseMove = (e) => {
    const coords = { x: e.x, y: e.y };
    setCoords(coords);
  };

  // Se quita el listener cuando se desmonta el componente
  useEffect(() => {
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <div>
      <h1>Eres la genial!!</h1>
      <h6>
        X: {x}, Y:{y}
      </h6>
    </div>
  );
};

export default Message;
