describe('Pruebas en el archivo demo.test.js', () => {
  test('Deben de ser iguales los dos strings', () => {
    // 1. inicializacion
    const saludo = 'Hola Mundo';

    //   2. estimulo
    const saludo2 = `Hola Mundo`;

    //   3. observar el comportamiento
    expect(saludo).toBe(saludo2);
  });
});
