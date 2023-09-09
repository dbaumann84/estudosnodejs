//importar o app 
import app from './app.js'

import conexao from '../infra/conexao.js'

//Definição de uma porta OBS 
//Obs: É uma boa prática colocar constantes em letras maiusculas
const PORT = 3000

//fazer a conexão com o banco de dados
conexao.connect((erro) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log("Conexão realizada com sucesso.")
        // escutar a porta 300
        app.listen(PORT, () => {
            console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
        }) 
    }
})


