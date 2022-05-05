import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SearchScreen from '../../../components/search/SearchScreen';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Pruebas en el <SearchScreen />', () => {
  test('Debe regresar el componente correctamente', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info p').text().trim()).toBe(
      'Please, type a name to search a hero.'
    );
  });

  test('Debe mostrar a batman y el input con el queryString', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('input').prop('value')).toBe('batman');
  });

  test('Debe de mostrar el mensaje de no hay resultados cuando se pase batman123', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('input').prop('value')).toBe('batman123');
    expect(wrapper.find('.alert-danger').text().trim()).toBe('Not results');
  });

  test('Debe llamar el navigate a la nueva pantalla', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>
    );

    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchValue',
        value: 'batman',
      },
    });

    wrapper.find('form').prop('onSubmit')({
      preventDefault: () => {},
    });

    expect(mockNavigate).toHaveBeenCalledWith('?q=batman');
  });
});
