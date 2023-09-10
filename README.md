

# Anotações Importantes sobre o Projeto

Este projeto é baseado na [playlist do Curso de Node JS do Professor Edson Maia](https://youtube.com/playlist?list=PLnex8IkmReXwCyR-cGkyy8tCVAW7fGZow&si=JnwFTgTWPMpktDGM).

Compartilho minhas anotações para quem tiver interesse. O principal objetivo destas anotações é aprender não apenas com as excelentes aulas e didática do Professor Edson, mas também aprofundar meu conhecimento em markdown.

## Configuração Inicial

Para criar o arquivo `package.json`, digite no terminal do VS Code o seguinte comando:

```shell
npm init -y
```

Para recapitular:

O arquivo `package.json` é fundamental em projetos Node.js. Ele registra metadados importantes e define atributos funcionais do projeto para o npm, permitindo a instalação de dependências, execução de scripts e identificação do ponto de entrada do pacote.

O npm é um gerenciador de pacotes essencial para o ambiente de tempo de execução JavaScript Node.js.

## Instalação do Express.js

Utilize o seguinte comando para instalar o [Express.js](https://expressjs.com/pt-br/) via terminal do VS Code:

```shell
npm install express --save
```

O Express.js é um framework para Node.js que oferece recursos mínimos para a construção de servidores web.

## Instalação do Nodemon

O Nodemon é um utilitário que monitora as mudanças nos arquivos do projeto e reinicia automaticamente o servidor Node.js quando necessário. Para instalá-lo, utilize o comando:

```shell
npm install nodemon -D
```

Após a instalação, adicione as seguintes linhas dentro da tag `scripts` no arquivo `package.json`:

```json
"scripts": {
  "dev": "nodemon src/app.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

Para iniciar o servidor em modo de desenvolvimento, utilize o comando:

```shell
npm run dev
```

## A partir da Aula 3

A partir da aula 3, o Professor introduziu alterações de boas práticas de programação, utilizando importações e exportações de módulos. Para garantir o funcionamento correto, adicione a seguinte linha ao arquivo `package.json`, logo abaixo do comando `"main": "index.js"`:

```json
"type": "module",
```

Depois de adicionar esse item, execute o seguinte comando no terminal para verificar se o servidor sobe corretamente:

```shell
node .\server.js
```

### Atenção

Para continuar utilizando o Nodemon com o comando `npm run dev`, você deve alterar a linha correspondente no arquivo `package.json` de:

```json
"dev": "nodemon src/app.js",
```

Para:

```json
"dev": "nodemon src/server.js",
```

## A partir da Aula 7

A partir da aula 7, o projeto começa a envolver persistência de dados no MySQL. Siga as instruções abaixo:

1. Para instalar o MySQL, utilize o seguinte comando no terminal:

```shell
npm install mysql
```

2. Caso sua máquina não possua o MySQL Workbench, você pode fazer o download [aqui](https://dev.mysql.com/downloads/workbench/).

3. Criação do Schema no MySQL:

```sql
CREATE SCHEMA `bdcopa` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
```

4. Query da Tabela:

```sql
CREATE TABLE `bdcopa`.`selecoes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `selecao` VARCHAR(25) NOT NULL,
  `grupo` CHAR(1) NOT NULL,
  PRIMARY KEY (`id`)
);
```

## Na Aula 10

Na aula 10, o Professor Edson propõe adequações no projeto para aplicar Padrões de Projetos conforme a imagem:

![Refatorar para MVC](/img/mvc.png)

### Padrões de Projetos Aplicados

- [Singleton](https://refactoring.guru/pt-br/design-patterns/singleton)

### Importante Estudar Também

- Manipulação de Array em JavaScript
- MySQL
- CRUD
- MVC
- Orientação a Objetos
- Padrões de Projetos
- Padrão Repository
- Promise
- Metodos assincronos (async e await)

