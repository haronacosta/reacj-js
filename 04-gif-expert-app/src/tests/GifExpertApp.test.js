import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas al componente <GifExperApp />', () => {
  test('Se debe de mostrar correctamete el componente', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar una lista de categorias', () => {
    const initialCategories = ['Bayern', 'Dortmund'];

    const wrapper = shallow(
      <GifExpertApp initialCategories={initialCategories} />
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('GifGrid').length).toBe(initialCategories.length);
  });
});
