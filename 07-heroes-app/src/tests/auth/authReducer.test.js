import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Pruebas del authReducer.js', () => {
  const init = {
    logged: false,
  };

  const payload = {
    name: 'Haron',
  };

  test('Debe regresar el state por defecto', () => {
    const state = authReducer(init, {});

    expect(state).toEqual(init);
  });

  test('Debe de autenticar al usuario y colocar el name', () => {
    const action = {
      type: types.login,
      payload,
    };

    const state = authReducer(init, action);

    expect(state).toEqual({
      ...payload,
      logged: true,
    });
  });

  test('Debe de desautenticar al usuario', () => {
    const action = {
      type: types.logout,
    };

    const state = authReducer({ name: 'Haron', logged: true }, action);

    expect(state).toEqual({ logged: false });
  });
});
