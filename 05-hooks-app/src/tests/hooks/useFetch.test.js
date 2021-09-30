import useFetch from '../../hooks/useFetch';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en useFetch', () => {
  test('Debe retornar la informacion por defecto', async () => {
    const { result } = renderHook(() =>
      useFetch('https://www.breakingbadapi.com/api/quotes/1')
    );

    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(false);
  });

  test('Debe de tener la información deseada', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://www.breakingbadapi.com/api/quotes/1')
    );

    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);

    expect(loading).toBe(false);

    expect(error).toBe(false);
  });

  test('Debe de manejar el erro', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://reqres.in/appid/users?page=2')
    );

    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect(data).toBe(null);

    expect(loading).toBe(false);

    expect(error).toBe(true);
  });
});
