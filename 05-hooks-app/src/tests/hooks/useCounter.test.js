import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas al useCounter.js', () => {
  const value = 100;

  test('Debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(1);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('Debe de tener el counter en el valor que se le pasa por parametro', () => {
    const { result } = renderHook(() => useCounter(value));

    expect(result.current.counter).toBe(value);
  });

  test('Debe de incrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter(value));

    const { increment } = result.current;

    act(() => {
      increment();
    });

    const { counter } = result.current;

    expect(counter).toBe(value + 1);
  });

  test('Debe de decrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter(value));

    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    const { counter } = result.current;

    expect(counter).toBe(value - 1);
  });

  test('Debe de reiniciar el contador al valor que se le pasa', () => {
    const { result } = renderHook(() => useCounter(value));

    const { increment, reset } = result.current;

    act(() => {
      increment();
      reset();
    });

    const { counter } = result.current;

    expect(counter).toBe(value);
  });
});
