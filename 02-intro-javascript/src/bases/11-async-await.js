
const getImage = async () => {
    const apiKey = `oghCEUTSD7w8RlQ8os2Hm3CRuKRgCtxd`;
  
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
  
    const { data } = await resp.json();
  
    const images = data.images;
  
    const original = images.original;
  
    const img = document.createElement('img');
  
    img.src = original.url;
  
    document.body.append(img)
  
  }
  
  getImage();
  