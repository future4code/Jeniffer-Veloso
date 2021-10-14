/* Respostas dos Exercícios de interpretação de código :

1 - a) Pergunta ao usuario qual é o numero que ele pretende testar, converte o numero inserido pelo usuario para number,
verifica se o numero é par e se tem o mesmo tipo do numero 0 (===), cujo tipo é number. Caso o número inserido seja par,
apresenta na tela a seguinte mensagem: Passou no teste. 
Caso o número inserido seja ímpar, aparesenta a seguinte mensagem na tela: Não passou no teste.

b) Números pares.

c) Números ímpares.

2 -

a) Serve para definir um preço de acordo com a fruta escolhida pelo usuário ou demais (default) e apresentar o preço na tela. 

b) 2.25

c) O código executa a instrução default, atribuindo o valor na condição default e imprime a mensagem de que
O preço da fruta  Pêra  é  R$  5 

3 -

a) Solicitando que o usuário informe o primeiro número e convertendo a entrada para o tipo Number

b) 

Se o numero for igual a 10:
Esse número passou no teste
mensagem is not defined

Se o numero for igual a -10:
mensagem is not defined

c) Sim, haverá erro de que variavel mensagem não foi definida, pois let só existe no escopo local do bloco

-----------------------------------------------------------------------------------------------
Respostas Exercicios de escrita

1 - 
const idadeUsuario = Number(prompt("Informe a sua idade"))
if(idadeUsuario >= 18){
   console.log("Você pode dirigir.")
}else{
   console.log("Você não pode dirigir.")

}

2 - 
const turnoAluno = prompt("Informe seu turno usando as seguintes iniciais: M (matutino) ou V (Vespertino) ou N (Noturno).")
 if(turnoAluno === "M"){
   console.log("Bom Dia!")
}else if(turnoAluno === "V"){
   console.log("Boa Tarde!")
}else if(turnoAluno === "N"){
   console.log("Boa Noite!")
}else{
   console.log("Insira um turno válido!")
}

3 - 
const turnoAluno = prompt("Informe seu turno usando as seguintes iniciais: M (matutino) ou V (Vespertino) ou N (Noturno).")
switch(turnoAluno){
    case "M": 
        console.log("Bom Dia!")
        break; 
    case "V": 
    console.log("Boa Tarde!")
        break;
    case "N": 
        console.log("Boa Noite!")
        break;  
    default:
        console.log("Insira um turno válido!")
        break;

    }

4 - 
const generoFilme = prompt("Informe o genero do filme")
const valorIngresso = Number(prompt("Informe o valor do ingresso"))
if(generoFilme === "fantasia" && valorIngresso < 15){
   console.log("Bom filme!")
}else{
   console.log("Escolha outro filme :(")
}




