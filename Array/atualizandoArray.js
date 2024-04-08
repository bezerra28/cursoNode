// nesse exemplo nois estamus atualizando um array de nome usando o metodo splice onde ele usa tres parametros
// o primeiro e o indice do array a ser excluido e o segundo a quantidade que sera excluida e o terceiro parametro
// e o que sera adicionado
animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão']

animaisDoAquario.splice(1, 0, 'sardinha')
animaisDoAquario.splice(3, 2, 'atum')

console.log(animaisDoAquario)
