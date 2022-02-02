
export type transaction = {
  valor: number,
  data: Date,
  descrição: string,
}
export type Account = {
name: string,
CPF: string,
dataBirth: Date,
saldo: number,
extrato: Array <transaction>

}





