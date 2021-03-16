// Arreglos en JS

const arreglo = [1, 2, 3, 4];
// No usar el .push() porque se modifica el objeto original, usar Spread operator

// arreglo.push(1);

// Operador spread
let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map((valor) => {
  return valor * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
