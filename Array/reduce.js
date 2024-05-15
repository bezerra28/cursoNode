const notas = [7, 7, 8, 9];

const somaNotas = notas.reduce((total, nota) => total + nota, 0);

console.log(somaNotas); // Output: 31