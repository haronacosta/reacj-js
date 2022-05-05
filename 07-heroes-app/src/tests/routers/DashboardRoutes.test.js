import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import DashboardRoutes from '../../routers/DashboardRoutes';

describe('pruebas en el <DashboardRoutes />', () => {
  const contextValue = {
    user: {
      logged: true,
      name: 'Juan Perez',
    },
  };

  test('Debe mostrarse correctamente', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Marvel Screen');
  });

  test('Debe mostrarse correctamente los heroes de DC', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/dc']}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('DCScreen');
  });
});
