const array1 = new Array(5);

array1[4] = 15;
array1[0] = 19;

let soma = 0;

for (let i = 0; i < array1.length; i++) { // faz um loop para percorrer os valores do array
    if (typeof array1[i] === 'number') { // Verifica se o valor é do tipo número
      soma += array1[i];
    }
  }
  
  console.log(soma); // O resultado da soma será exibido no console
  
  


console.log(array1);
console.log(soma);
console.log(array1.length);