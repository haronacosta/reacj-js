import { mount } from 'enzyme';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import LoginScreen from '../../../components/auth/LoginScreen';
import { types } from '../../../types/types';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const contextValue = {
  dispatch: jest.fn(),
  user: {
    logged: false,
  },
};

describe('Pruebas en el <LoginScreen />', () => {
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<LoginScreen />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('Se debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe realizar el dispatch y la navegación', () => {
    const handleClick = wrapper.find('button').prop('onClick');

    handleClick();

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: 'Haron Acosta',
      },
    });

    expect(mockNavigate).toHaveBeenCalledWith('/marvel', { replace: true });

    localStorage.setItem('lastPath', '/dc');

    handleClick();

    expect(mockNavigate).toHaveBeenCalledWith('/dc', { replace: true });
  });
});
