import React from 'react';
import { shallow } from 'enzyme';
import HookApp from '../HookApp';

describe('Pruebas al componente <HookApp/>', () => {
  test('Se debe de mostrar correctamete el componente', () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
