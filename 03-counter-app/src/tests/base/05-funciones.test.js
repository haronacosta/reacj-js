import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
  test('getUser debe de retornar un objeto', () => {
    const usuario = getUser();

    expect(usuario).toEqual({
      uid: 'ABC123',
      username: 'El_Papi1502',
    });
  });

  test('getUsuarioActivo debe regresar un objeto pasando el nombre por parametros', () => {
    const nombre = 'Haron';

    const usuarioActivo = getUsuarioActivo(nombre);

    expect(usuarioActivo).toEqual({
      uid: 'ABC567',
      username: nombre,
    });
  });
});
