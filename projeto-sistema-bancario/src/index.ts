// exercícios: 
// 1: crie um endpoint que aponte para a URL base da API. Esse endpoint pode responder apenas com um status ou mensagem fixa.
import express, {Express, Request, Response} from "express"
import cors from "cors"
import { accounts} from "./accounts"


const app : Express = express();

// midlweser:
app.use(cors())
app.use(express.json());

app.post("/users/create", ( req: Request, res: Response) =>{  // criando endpoint acessado pelo método post , com o caminho dentro dos parenteses
try { // trycatch qualquer erro dentro do trecho try é direcionado para o trecho catch que irá tratar o erro, concertar
    
    const { name, CPF,dataBirthAsString,  } = req.body

    //formatar certinho data de nascimento:
    const [day, month, year] = dataBirthAsString.split("/") // o metodo split vai pegar a data , quebrar a string e transformar em um array
    // vai ficar parecido com isso: [01,  01, 2020]
    const dataBirth: Date = new Date(`${year}-${month}-${day}`)
    // para criar uma conta ou o proprio endpoint: validar as entradas da requisição:

    // date.now vai colocar a data atual. - a data do aniversário em milisegundos:
    const ageInMilisseconds:number = Date.now() - dataBirth.getTime()

    //para tirar dos milisegundos e colocar em anos:
    const ageInYers: number = ageInMilisseconds /1000/60/60/24/365

    if(ageInYers < 18) {
        res.statusCode = 406 
        throw new Error("Idade deve ser maior que 18 anos")
         
    }
    
    
    // consultar/alterar a base de dados:
   
     
     // adicionar nova conta no array: push é um metodo do array que insere um novo objeto:
    accounts.push({ // dataBirth : dia/mes/ano
        name,
        CPF,
        dataBirth,
        saldo: 0,
        extrato: []

    })

    //validar os resultados da consulta; não precisa.
    // e por ultimo enviar a resposta:
    res.status(201).send("conta criada com sucesso")

} catch (error) {
    console.log (error) // vai nos dar maiores informações sobre o erro
    res.send(error)
}

}) 

app.get("/users/all", (req: Request, res: Response) =>{
    try {
        if(!accounts.length){
            res.statusCode = 404
            throw new Error ("Nenhuma conta encontrada")
        }
        res.status(200).send(accounts)
    } catch (error) {
        res.send(error)
    }
})

app.listen(3003, () => {
    console.log ("servidor disponível em 3003")
})

