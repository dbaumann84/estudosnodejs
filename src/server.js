//importar o app 
import app from './app.js'



//Definição de uma porta OBS 
//Obs: É uma boa prática colocar constantes em letras maiusculas
const PORT = process.env.PORT || 3000

     // escutar a porta 300 ou a porta do serviço
     app.listen(PORT, () => {
        console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
    }) 


