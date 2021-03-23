const apiKey = `oghCEUTSD7w8RlQ8os2Hm3CRuKRgCtxd`;

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
  .then(res => res.json())
  .then(({data}) => {

  const images = data.images;

  const original = images.original;

  const img = document.createElement('img');

  img.src = original.url;

  document.body.append(img)
})
