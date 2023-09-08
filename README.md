# Anotações importantes sobre o projeto

Este projeto é baseado na [playlist do Curso de Node JS do Professor Edson Maia](
https://youtube.com/playlist?list=PLnex8IkmReXwCyR-cGkyy8tCVAW7fGZow&si=JnwFTgTWPMpktDGM)

Para criar o arquivo package.json digite no terminal do VS Code o comando: 

`npm init -y`

>* **Para recapitular**:
>O arquivo package.json é o coração de qualquer projeto Node. Ele registra metadados importantes sobre um projeto que são necessários antes da publicação no NPM e também define atributos funcionais de um projeto que o npm usa para instalar dependências, executar scripts e identificar o ponto de entrada para nosso pacote.

>* **npm**: é um gerenciador de pacotes para o Node.JS npm, Inc. é uma subsidiária do GitHub, que fornece hospedagem para desenvolvimento de software e controle de versão com o uso do Git. npm é o gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.js.

* Comando para instalar o [express](https://expressjs.com/pt-br/) no terminal do VS Code.

>**Express.js** é um framework para Node.js que fornece recursos mínimos para construção de servidores web. Foi lançado como software livre e de código aberto sob a Licença MIT. É um dos mais populares frameworks para servidores em Node.js.

`$ npm install express --save`

Instalar o  nodemon que é um utilitário que monitora as mudanças nos arquivos do seu projeto e reinicia automaticamente o servidor Node. js quando necessário. Assim, você não precisa parar e iniciar o servidor manualmente a cada modificação.

`npm install nodemon -D`

Após a instação adicione dentro da tag script do arquivo package.json as linhas abaixo:
  ```
  "scripts": {
    "dev": "nodemon src/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ```

Para inciar o servidor em modo dev digite no terminal o comando `npm run dev`.

## Da aula 3 em diante
O professor fez alterações de boas práticas de programação usando import e export
Para as ações funcionarem corretamente é necessário adicionar o idem abaixo no arquivo package.json logo abaixo do comando `"main": "index.js","` adicione `  "type": "module",`
Após adicionar o item, execute no terminal o comando `node .\server.js` e verifique se o servidor subiu novamente.
### **Atenção** 
Para continuar utilizando o  _nodemon_ com o comando comando `npm run dev`, você deve alterar no arquivo package.json a linha `"dev": "nodemon src/app.js",` para `"dev": "nodemon src/server.js",`. 

## Da aula 7  em diante
Até a aula 6 o projeto fez um CRUD sem persistência, de agora em diante é necessário fazer algumas instalações no projeto.
* para instalar o mysql, digite no terminal o comando `npm install mysql` .
* caso sua máquina não possua MySQL Workbench realize a instação. [Download](https://dev.mysql.com/downloads/workbench/)



### Importante estudar também:
* Manipulação de [Array em JavaScript](https://www.w3schools.com/js/js_array_methods.asp) 
