import React from 'react';
import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
import useFetch from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch');

describe('Pruebas en <MultipleCustomHooks />', () => {
  test('Debe de mostrarse correctamente', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: false,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar la información', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Gabriel',
          quote: 'Hola Mundo',
        },
      ],
      loading: false,
      error: false,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('blockquote').text().trim()).toBe('Hola Mundo');
    expect(wrapper.find('.blockquote-footer').text().trim()).toBe('Gabriel');
  });
});
