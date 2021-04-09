import React from 'react';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en "<PrimeraApp />"', () => {
  // test('Debe de regresarme Hola, soy Goku', () => {
  //   const saludo = `Hola, soy Goku`;
  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);
  //   expect(getByText(saludo)).toBeInTheDocument();
  // });

  test('Se debe mostrar correctamente <PrimeraApp />', () => {

    const saludo = 'Hola, soy Goku';

    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar el subtitulo enviado por props', () => {

    const saludo = 'Hola, soy Goku';

    const subtitulo = 'Soy un subtitulo';

    // Shallow es la manera de manejar los componentes en enzyme

    const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />);

    // .find() es el equivalente al querySelector de JS pero con varios metodos
    const textoSubtitulo = wrapper.find('p').text();

    console.log(textoSubtitulo);

    expect(textoSubtitulo).toBe(subtitulo);

  });
});
