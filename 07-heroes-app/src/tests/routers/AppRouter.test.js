import { mount } from 'enzyme';
import { AuthContext } from '../../auth/authContext';
import AppRouter from '../../routers/AppRouter';

describe('Pruebas en el AppRouter', () => {
  test('Debe de mostrar el componente LoginScreen si el usuario no esta logueado', () => {
    const contextValue = {
      user: {
        logged: false,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Login Screen');
  });

  test('Se debe de mostrar el componente de Marvel si el usuario esta logueado', () => {
    const contextValue = {
      user: {
        logged: true,
        name: 'Haron Acosta',
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find('h1').text().trim()).toBe('Marvel Screen');

    expect(wrapper.find('.navbar').exists()).toBe(true);
  });
});
