import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el custom Hook useFetchGifts', () => {
  test('Debe de retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Bayern')
    );

    const { images, loading } = result.current;

    await waitForNextUpdate();

    expect(images).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('Debe de retornar un array con valores y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Bayern')
    );

    await waitForNextUpdate();

    const { images, loading } = result.current;

    expect(images.length).toBe(10);
    expect(loading).toBe(false);
  });
});
