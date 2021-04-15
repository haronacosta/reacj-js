import React, { useEffect } from 'react';

const GridGifs = ({ category }) => {
  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=oghCEUTSD7w8RlQ8os2Hm3CRuKRgCtxd&q=dance&limit=10`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });

    console.log(gifs);
  };

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <>
      <h6>{category}</h6>
    </>
  );
};

export default GridGifs;
