/* RESPOSTAS EXERCÍCIO DE INTERPRETAÇÃO
1 -a ) 10 e 50   b) quebraria o código, pois iria aperecer que não é uma função.

RESPOSTA EXERCÍCIO ESCRITA DE CODIGO

1 - a) function informacoesSobreEu () {
       console.log ("Eu sou Jeniffer, tenho 26 anos, moro em Santa Catarina e sou estudante")
       }
       informacoesSobreEu ()

    b) function informacoesSobreEu(nome, idade, naturalidade, profissao) {
              
       return "Eu sou "+nome+", tenho "+ idade +" anos, moro em "+naturalidade+" e sou "+profissao+"."

       }

       const nome = "Jeniffer"
       const idade = "26"
       const naturalidade = "Santa Catarina"
       const profissao = "Estudante"

       console.log(informacoesSobreEu(nome, idade, naturalidade, profissao))

2 - a) function somar (numeroA, numeroB) {
        const soma = numeroA + numeroB
        return soma
        }
        const resultado = somar (8, 5)
        console.log (resultado)

    b) function comparaNumeros(primeiroNumero, segundoNumero) {
        return primeiroNumero >= segundoNumero
	}
	const resultado = comparaNumeros(8, 5)
	console.log(resultado)

     c) function verificaNumeroPar(primeiroNumero){
        return primeiroNumero%2==0
	}
	const resultado = verificaNumeroPar(8)
	console.log(resultado)

     d) function imprimeTamanhoMensagem(mensagem){
        return mensagem.length+' '+mensagem.toUpperCase()
        }
        console.log(imprimeTamanhoMensagem('teste mensagem'))

3 - function somaNumeros(primeiroNumero, segundoNumero){
    const soma = primeiroNumero + segundoNumero
    return soma
    }
    function subtraiNumeros(primeiroNumero, segundoNumero){
    return primeiroNumero - segundoNumero    
    }
    function multiplicaNumeros(primeiroNumero, segundoNumero){
    return primeiroNumero * segundoNumero
    }

    function divideNumeros(primeiroNumero, segundoNumero){
    return primeiroNumero / segundoNumero     
    }

    const primeiroNumero = parseInt(prompt("Informe o primeiro numero"))
    const segundoNumero = parseInt(prompt("Informe o segundo numero"))

    console.log('soma '+somaNumeros(primeiroNumero,segundoNumero))
    console.log('subtrai '+subtraiNumeros(primeiroNumero,segundoNumero))
    console.log('multiplica '+multiplicaNumeros(primeiroNumero,segundoNumero))
    console.log('dividenumeros '+divideNumeros(primeiroNumero,segundoNumero))