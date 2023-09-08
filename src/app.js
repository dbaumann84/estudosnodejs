//importar o express
import express from 'express'

//Criar uma instância do express neste projeto
const app = express()


//Criar uma rota padrão ou raiz
app.get('/',(req,res)=>{
    res.send('Curso de nodejs')
})

//Expor app para fora
export default app