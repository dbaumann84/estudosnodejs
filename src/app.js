//importar o express
import express from 'express'
import SelecaoController from './app/controllers/selecaoController.js'

//Criar uma instância do express neste projeto
const app = express()
//Possibilita express fazer leitura de JSON no corpo de uma requisição. <body> com json
app.use(express.json())

//Rotas
//CRUD -  (Create, Read, Update, Delete)
//Create

//Rota para adicionar novas seleções
app.post('/selecoes', SelecaoController.store)

//Read

//Rota para listar todas seleções
app.get('/selecoes',SelecaoController.index)
//Rota para buscar seleções por id
app.get('/selecoes/:id',SelecaoController.show)

//Update
//Rota para atualizar uma seleção
app.put('/selecoes/:id',SelecaoController.update)

//Delete
//Rota para apagar uma seleção
app.delete('/selecoes/:id', SelecaoController.delete)

//Expor app para fora
export default app

