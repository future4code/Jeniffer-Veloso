/* RESPOSTAS EXERCÍCIO INTERPRETAÇÃO

1 - 10

2 - a) 19, 21, 23, 25, 27, 30

-------------------------------------------------------------------

RESPOSTAS EXERCÍCIOS DE ESCRITA

1 - const qtdBichinhosEstimacao = Number(prompt("Informe quantos bichinhos de estimacao voce possui: "))
if(qtdBichinhosEstimacao === 0){
   console.log("Que pena! Você pode adotar um pet!")
}else{
   var nomesDosPets = new Array();
   for(let i=0; i<qtdBichinhosEstimacao; i++){
 if(i==0){
         let nomePet = prompt("Informe o nome de um dos seus pets, ou do seu pet, caso tenha apenas um: ")
         nomesDosPets.push(nomePet)
}else{
         let nomePet = prompt("Informe o nome do seu outro pet ainda nao informado: ")
         nomesDosPets.push(nomePet)
      }
   }
   console.log(nomesDosPets)

2 - a)

var arrayoriginal = new Array(1, 2, 3, 4, 5)

imprimeValores(arrayoriginal)

function imprimeValores(arrayoriginal){
   for(let i=0; i<arrayoriginal.length; i++){
      console.log(arrayoriginal[i])
   }
}

b)

var arrayoriginal = new Array(1, 2, 3, 4, 5)

imprimeValoresDivididosPorDez(arrayoriginal)

function imprimeValoresDivididosPorDez(arrayoriginal){
   for(let i=0; i<arrayoriginal.length; i++){
      console.log(arrayoriginal[i]/10)
   }
}

c)

var arrayoriginal = new Array(1, 2, 3, 4, 5)

imprimeValoresPares(arrayoriginal)

function imprimeValoresPares(arrayoriginal){
   var numerosPares = new Array();
   for(let i=0; i<arrayoriginal.length; i++){
      if(arrayoriginal[i]%2==0){
         numerosPares.push(arrayoriginal[i]); 
      }
   }
   console.log(numerosPares)
}

d)

var arrayoriginal = new Array(1, 2, 3, 4, 5)

imprimeListaElementos(arrayoriginal)

function imprimeListaElementos(arrayoriginal){
   var arrayElementos = [0, 1, 2, 3];
   var imprimeElementos = [];
   for(let i=0; i<3; i++){
      imprimeElementos.push("O elemento do índex "+i+" é: "+arrayElementos[i]+".");
   }
   console.log(imprimeElementos)
}

e)

var arrayoriginal = new Array(1, 2, 3, 4, 5)

imprimeMaiorMenorValor(arrayoriginal)

function imprimeMaiorMenorValor(arrayoriginal){
   var menorValor=999999999;
   var maiorValor=-99999999;
   for(let i=0; i<arrayoriginal.length; i++){
      if(arrayoriginal[i] < menorValor){
         menorValor = arrayoriginal[i];
      }
      if(arrayoriginal[i] > maiorValor){
         maiorValor = arrayoriginal[i];
      }
   }
   console.log("O menor valor e: "+menorValor)
   console.log("O maiorvalor e: "+maiorValor)
}