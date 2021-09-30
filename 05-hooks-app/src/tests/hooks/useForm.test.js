import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en el useForm', () => {
  const initialForm = {
    name: 'Haron',
    email: 'haron@mail.com',
  };

  test('Debe de regresar un formulario por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));

    let [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('Debe de cambiar el valor del formulario (cambiar name)', () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [, handleInputChange] = result.current;

    const newValues = {
      target: {
        name: 'name',
        value: 'Haron2',
      },
    };

    act(() => {
      handleInputChange(newValues);
    });

    const [values] = result.current;

    expect(values.name).toEqual(newValues.target.value);
  });

  test('Debe de restablecer el formulario con reset', () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [, handleInputChange, reset] = result.current;

    const newValues = {
      target: {
        name: 'name',
        value: 'Haron2',
      },
    };

    act(() => {
      handleInputChange(newValues);
      reset();
    });

    const [values] = result.current;

    expect(values).toEqual(initialForm);
  });
});
