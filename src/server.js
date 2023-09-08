//importar o app 
import app from './app.js'

//Definição de uma porta OBS 
//Obs: É uma boa prática colocar constantes em letras maiusculas
const PORT = 3000

// escutar a porta 300
app.listen(PORT,()=>{
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})
