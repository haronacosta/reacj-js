import { mount } from 'enzyme';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import HeroScreen from '../../../components/hero/HeroScreen';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Pruebas en el componete <HeroScreen/>', () => {
  test('No debe mostrar el <HeroScreen /> si no hay un heroe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <Routes>
          <Route path='/hero' element={<HeroScreen />} />
          <Route path='/' element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('No hero page');
  });

  test('Debe de mostrar el heroe si el existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Routes>
          <Route path='/hero/:id' element={<HeroScreen />} />
          <Route path='/' element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.heroName').text().trim()).toBe('Spider Man');
  });

  test('debe de regresar a la pantalla anterior', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Routes>
          <Route path='/hero/:id' element={<HeroScreen />} />
          <Route path='/' element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();

    const handleClick = wrapper.find('.btn-outline-info').prop('onClick');

    handleClick();

    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  test('Debe mostrar el no page si el heroe no existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider121212']}>
        <Routes>
          <Route path='/hero/:id' element={<HeroScreen />} />
          <Route path='/' element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('h1').text().trim()).toBe('No hero page');
  });
});
