if (1 > 0) {
    let nome = "ana";
    console.log(nome); // ‘Ana’
  }
  
  // variável `nome` não está acessível
  //console.log(nome); // Error: nome is not defined

  const numero = 28;
  console.log(typeof numero); // typeof mostra o tipo da variavel

  const primeiroNome = 'Carlos';
const ultimoNome = 'Drummond de Andrade';

// Usando o operador +
const nomeCompletoConcatenado = primeiroNome +' '+ ultimoNome;
console.log('Usando operador +: ', nomeCompletoConcatenado);

// Usando template strings
const nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`;
console.log(`Usando template strings: ${nomeCompletoTemplate}`);
