//temos que dividir esse array
const listaEstudante = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos',
 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

 //para dividir usamaos o metodo slice que precisa de parametros no primeiro damos o inicio e o fim e 
 //no segundo apenas o inicio
 const sala1 = listaEstudante.slice(0, listaEstudante.length/2);
 const sala2 = listaEstudante.slice(listaEstudante.length/2);

 console.log(sala1);
 console.log(sala2);