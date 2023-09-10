//importar o express
import express from 'express'
import routes from './routes.js'


//Criar uma instância do express neste projeto
const app = express()
//Possibilita express fazer leitura de JSON no corpo de uma requisição. <body> com json
app.use(express.json())
//usar o router
app.use(routes)






//Expor app para fora
export default app

