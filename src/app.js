//importar o express
import express from 'express'

//mock (estrutura básica de dados para teste na api)
const selecoes = [
    {id:1,selecao:'Brasil',grupo:'G'},
    {id:2,selecao:'Suiça',grupo:'G'},
    {id:3,selecao:'Sérvia',grupo:'G'},
    {id:4,selecao:'Camarões',grupo:'G'},
]

//Criar uma instância do express neste projeto
const app = express()


//Criar uma rota padrão ou raiz
app.get('/',(req,res)=>{
    res.send('Curso de nodejs')
})

app.get('/selecoes',(req,res)=>{
    res.status(200).send(selecoes)
})

//Expor app para fora
export default app