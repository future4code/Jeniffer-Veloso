// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("Informe a altura do retangulo: ")
  const largura = prompt("Informe a largura do retangulo: ")
  console.log("A area do retangulo é: "+altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Informe o ano atual: ")
  const anoNascimento = prompt("Informe o ano de nascimento: ")
  console.log("A idade é igual a: "+anoAtual-anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso/(altura*altura)
}
const peso = prompt("Informe o seu peso: ")
const altura = prompt("Informe a sua altura: ")

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt("Informe seu nome: ")
  const idadeUsuario = prompt("Informe a sua idade: ")
  const emailUsuario = prompt("Informe o seu e-mail: ")
  console.log("Meu nome é "+nomeUsuario+", tenho "+idadeUsuario+" anos, e o meu email é "+emailUsuario)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const primeiraCorFavorita  = prompt("Informe a sua primeira cor favorita: ")
  const segundaCorFavorita  = prompt("Informe a sua segunda cor favorita: ")
  const terceiraCorFavorita  = prompt("Informe a sua terceira cor favorita: ")
  console.log(new Array(primeiraCorFavorita, segundaCorFavorita, terceiraCorFavorita))
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}
console.log(retornaStringEmMaiuscula('palavra'))

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo/valorIngresso
}
const custoEspetaculo = 3000
const valorIngresso = 100
console.log(calculaIngressosEspetaculo(custoEspetaculo, valorIngresso))

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
   return string1.length === string2.length
}
const string1 = "casa"
const string2 =  "amarelo"
console.log (checaStringsMesmoTamanho(string1, string2))

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
	return array[0]
}
const arrayElementos = new Array(1,2,3,4,5)
console.log(retornaPrimeiroElemento(arrayElementos))

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return arrayElementos[array.length-1]
}
arrayElementos = new Array(1,2,3,4,5)
console.log(retornaUltimoElemento(arrayElementos))

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
   let primeiroElemento = array[0]
   array[0] = array[array.length-1]
   array[array.length-1] = primeiroElemento 	
   return array
}
arrayElementos = new Array(1,2,3,4,5)
console.log(trocaPrimeiroEUltimo(arrayElementos))

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase()
}
console.log(checaIgualdadeDesconsiderandoCase('primeiraString', 'PrimEirAsTring'))


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}