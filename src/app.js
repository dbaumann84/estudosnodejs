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
    //Faz um push na lista pegando somente o corpo da requisição
    // selecoes.push(req.body)
    //res.status(201).send('Seleção cadastrada com sucesso!')
    const selecao = req.body
    const sql = "INSERT INTO selecoes SET ?;"
    conexao.query(sql, selecao, (erro, resultado) => {

        if (erro) {
            //console.log(erro)
            res.status(400).json({ 'erro': erro })
        } else {
            res.status(201).json(resultado)
        }
    })
})

//Read


//Rota para listar todas seleções
app.get('/selecoes', (req, res) => {
    //res.status(200).send(selecoes)
    const sql = "SELECT * FROM selecoes"
    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            //console.log(erro)
            res.status(404).json({ 'erro': erro })
        } else {
            res.status(200).json(resultado)
        }
    })
})

//Rota para buscar seleções por id
app.get('/selecoes/:id', (req, res) => {
    //variavel index recebe o parametro da variavel id que vem no get
    //let index = req.params.id
    //res.json(buscarSelecaoPorId(req.params.id))
    const id = req.params.id
    const sql = "SELECT * FROM selecoes WHERE id=?;"
    conexao.query(sql, id, (erro, resultado) => {
        const linha = resultado[0]
        if (erro) {
            //console.log(erro)
            res.status(404).json({ 'erro': erro })
        } else {
            res.status(200).json(linha)
        }
    })
    //console.log(index)
})

//Update

//Rota para atualizar uma seleção
app.put('/selecoes/:id', (req, res) => {
    // let index = buscarIndexSelecao(req.params.id)
    // //console.log(index)
    // //Método splice remove elemento de um array
    // selecoes[index].selecao = req.body.selecao
    // selecoes[index].grupo = req.body.grupo
    // res.json(selecoes)
    const id = req.params.id
    const selecao = req.body
    const sql = "UPDATE selecoes SET ? WHERE id=?;"
    conexao.query(sql, [selecao,id], (erro, resultado) => {

        if (erro) {
            //console.log(erro)
            res.status(400).json({ 'erro': erro })
        } else {
            res.status(200).json(resultado)
        }
    })

})

//Delete

//Rota para apagar uma seleção
app.delete('/selecoes/:id', (req, res) => {
    // let index = buscarIndexSelecao(req.params.id)
    //console.log(index)
    //Método splice remove elemento de um array
    // selecoes.splice(index, 1)
    // res.send(`Seleção com id ${req.params.id} excluída com sucesso`)
    const id = req.params.id
    const sql = "DELETE FROM selecoes WHERE id=?;"
    conexao.query(sql, id, (erro, resultado) => {

        if (erro) {
            //console.log(erro)
            res.status(404).json({ 'erro': erro })
        } else {
            res.status(200).json(resultado)
        }
    })

})

//Funções auxiliares

//retornar o objeto por id
function buscarSelecaoPorId(id) {
    //O retorno será um objeto
    return selecoes.filter(selecao => selecao.id == id)
}
//pegar a posição ou index do elemento no array  por id
function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}
//Expor app para fora
export default app

