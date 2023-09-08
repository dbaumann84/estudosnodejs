//importar o express
import express from 'express'

//Criar uma instância do express neste projeto
const app = express()
//Possibilita express fazer leitura de JSON no corpo de uma requisição. <body> com json
app.use(express.json())


//mock (estrutura básica de dados para teste na api)
const selecoes = [
    {id:1,selecao:'Brasil',grupo:'G'},
    {id:2,selecao:'Suiça',grupo:'G'},
    {id:3,selecao:'Sérvia',grupo:'G'},
    {id:4,selecao:'Camarões',grupo:'G'},
]




//Criar uma rota padrão ou raiz
app.get('/',(req,res)=>{
    res.send('Curso de nodejs')
})
//Rota para listar todas seleções
app.get('/selecoes',(req,res)=>{
    res.status(200).send(selecoes)
})

//Rota para adicionar novas seleções
app.post('/selecoes',(req,res)=>{
    //Faz um push na lista pegando somente o corpo da requisição
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso!')
})

//Expor app para fora
export default app