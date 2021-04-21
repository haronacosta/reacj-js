import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en el componente GifGridItem', () => {
  const title = 'Titulo de prueba';

  const url = 'https://media.giphy.com/media/Js7k1D3Jenq3MUp65Z/giphy.gif';

  let wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('Prueba del componente, traer el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
