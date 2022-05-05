import { mount } from 'enzyme';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { Navbar } from '../../../components/ui/Navbar';

const mockDispatch = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockDispatch,
}));

describe('Pruebas en el <Navbar />', () => {
  const contextValue = {
    dispatch: mockDispatch,
    user: {
      logged: true,
      name: 'Haron Acosta',
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<Navbar />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('Debe mostrarse correctamente el NavBar', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.navbar').exists()).toBe(true);
  });

  test('Debe mostrar el nombre del usuario', () => {
    expect(wrapper.find('.text-info').text().trim()).toBe(
      contextValue.user.name
    );
  });

  test('Debe de llamar el dispatch al hacer click en el boton de logout', () => {
    wrapper.find('button').prop('onClick')();

    expect(mockDispatch).toHaveBeenCalled();
  });
});
