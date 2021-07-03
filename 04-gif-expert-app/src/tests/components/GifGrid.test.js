import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => {
  const category = 'Liverpool';

  test('Debe de regresar correctamente el componente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar data despues de un gitFetch', () => {
    const gifs = [
      {
        id: 12345,
        title: 'Titulo de prueba',
        url: 'https://localhost.loc/img/unaimagen.jpg',
      },
      {
        id: 1234,
        title: 'Titulo de prueba',
        url: 'https://localhost.loc/img/unaimagen.jpg',
      },
      {
        id: 12445,
        title: 'Titulo de prueba',
        url: 'https://localhost.loc/img/unaimagen.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('p').exists()).toBe(false);

    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
