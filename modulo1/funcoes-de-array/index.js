/* RESPOSTA INTERPRETAÇÃO

1 - Será impresso no console os nomes e apelidos descritos no código, seguindo a ordem colocada, começando com amanda rangel e terminando com leticia chijo.

2 - Será impresso no console somente os nomes das pessoas descritas no código, sem o apelido.

3 - Será impresso no console somente os nomes e apelidos da Amanda Rangel e Laís Petra.
------------------------------------------------------------------------------------------------
RESPOSTAS ESCRITA DE CÓDIGO

1 - 

2 - 
a) const produtos = [ { nome: "Alface Lavada", categoria:
"Hortifruti", preco: 2.5 }, { nome: "Guaraná 2l", categoria:
"Bebidas", preco: 7.8 }, { nome: "Veja Multiuso", categoria:
"Limpeza", preco: 12.6 }, { nome: "Dúzia de Banana", categoria:
"Hortifruti", preco: 5.7 }, { nome: "Leite", categoria:
"Bebidas", preco: 2.99 }, { nome: "Cândida", categoria:
"Limpeza", preco: 3.30 }, { nome: "Detergente Ypê", categoria:
"Limpeza", preco: 2.2 }, { nome: "Vinho Tinto", categoria:
"Bebidas", preco: 55 }, { nome: "Berinjela kg", categoria:
"Hortifruti", preco: 8.99 }, { nome: "Sabão em Pó Ypê",
categoria: "Limpeza", preco: 10.80 } ]
const novoArrayB= produtos.map ((item, index, array) => { return item.nome})
console.log (novoArrayB)

b) continuar 