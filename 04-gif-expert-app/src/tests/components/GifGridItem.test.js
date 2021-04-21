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

  test('Se debe ver el title en un parrafo', () => {
    const p = wrapper.find('p');

    expect(p.text().trim()).toBe(title);
  });

  test('El url debe de verse en el src y el title en el alt', () => {
    const img = wrapper.find('img');

    const { src, alt } = img.props();

    expect(src).toBe(url);

    expect(alt).toBe(title);
  });

  test('Nos aseguramo que el contenedor div tenga la clase animate__fadeIn', () => {
    const div = wrapper.find('div');

    const classTest = `animate__fadeIn`;

    expect(div.hasClass(classTest)).toBe(true);
  });
});
