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
});
