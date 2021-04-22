import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en el componente AddCategory', () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();

    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('Se debe de mostrar correctamente el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Verificamos el funcionamiento del input, debe de cambiar la caja de texto', () => {
    const value = 'Hola mundo';

    wrapper.find('input').simulate('change', { target: { value } });

    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('No debe de ser llamada la función setCategories con un input en blanco', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Pruebas del input, se debe llamar al setCategories y limpiar el campo', () => {
    // 1. Simular input change
    // 2. Simular submit
    // 3. setCategories se debe de haber llamado setCategories
    // 4. El valor del input debe de estar ('')

    const value = 'Valor de prueba';

    wrapper.find('input').simulate('change', { target: { value } });

    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();

    expect(wrapper.find('p').text().trim()).toBe('');
  });
});
