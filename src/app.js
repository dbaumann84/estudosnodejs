//importar o express
import express from 'express'
//importar conexão do infra/conexao
import conexao from '../infra/conexao.js'

//Criar uma instância do express neste projeto
const app = express()
//Possibilita express fazer leitura de JSON no corpo de uma requisição. <body> com json
app.use(express.json())

//Rotas
//CRUD -  (Create, Read, Update, Delete)
//Create

//Rota para adicionar novas seleções
app.post('/selecoes', (req, res) => {
    const selecao = req.body
    const sql = "INSERT INTO selecoes SET ?;"
    conexao.query(sql, selecao, (erro, resultado) => {

        if (erro) {

            res.status(404).json({ 'erro': erro })
        } else {
            res.status(201).json(resultado)
        }
    })
})

//Read


//Rota para listar todas seleções
app.get('/selecoes', (req, res) => {
    const sql = "SELECT * FROM selecoes"
    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            res.status(404).json({ 'erro': erro })
        } else {
            res.status(200).json(resultado)
        }
    })
})

//Rota para buscar seleções por id
app.get('/selecoes/:id', (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM selecoes WHERE id=?;"
    conexao.query(sql, id, (erro, resultado) => {
        const linha = resultado[0]
        if (erro) {

            res.status(404).json({ 'erro': erro })
        } else {
            res.status(200).json(linha)
        }
    })

})

//Update

//Rota para atualizar uma seleção
app.put('/selecoes/:id', (req, res) => {
    const id = req.params.id
    const selecao = req.body
    const sql = "UPDATE selecoes SET ? WHERE id=?;"
    conexao.query(sql, [selecao, id], (erro, resultado) => {

        if (erro) {
            res.status(400).json({ 'erro': erro })
        } else {
            res.status(200).json(resultado)
        }
    })

})

//Delete

//Rota para apagar uma seleção
app.delete('/selecoes/:id', (req, res) => {

    const id = req.params.id
    const sql = "DELETE FROM selecoes WHERE id=?;"
    conexao.query(sql, id, (erro, resultado) => {

        if (erro) {

            res.status(404).json({ 'erro': erro })
        } else {
            res.status(200).json(resultado)
        }
    })

})


//Expor app para fora
export default app

