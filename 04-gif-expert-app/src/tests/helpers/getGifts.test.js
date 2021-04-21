import { getGifs } from '../../helpers/getGifts';

describe('Pruebas en el Helper getGifts fetch', () => {
  test('Debe de traer 10 elementos', async () => {
    const gifs = await getGifs('Naruto');

    expect(gifs.length).toBe(10);
  });

  test('No debe traer elementos si no se le envia una categoria', async () => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });
});
