//importar o express
const express = require('express')
//Criar uma instância do express neste projeto
const app = express()
//Definição de uma porta
const port = 3000

//Criar uma rota padrão ou raiz
app.get('/',(req,res)=>{
    res.send('Curso de nodejs')
})
// escutar a porta 300
app.listen(port,()=>{
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})
