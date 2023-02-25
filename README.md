# API completa com Node.JS - Backend

## Node

<details>
  <summary>. . .</summary>
  
  - Inicialização
  ```sh
  npm init -y
  ```
  > Comando para iniciar uma aplicação Node.js. Ele vai criar o arquivo de configurações `package.json`

  - Estrutura de Pastas
  ```sh
  mkdir backend backend/src && cd backend && npm init -y && code .
  ```
  > Mesmo comando, porém já inicia a estrutura de pastas. Neste exemplo a pasta raiz se chama `backend`, se deseja outro nome, basta alterar.

</details>





## Express
<details>
  <summary>. . .</summary>
  
  O framework Express ajuda a organizar e construir APIs robustas e flexíveis
  - Instalação
  ```sh
  npm i express
  ```
  - Lidando com erros assíncronos
  ```sh
  npm i express-async-errors -D
  ```
  > Por padrão, o Express vai encaminhar todos os erros lançados para serem tratados pelos middlewares de erros. No entanto, erros lançados em middlewares assíncronos não são tratados do mesmo jeito. A solução mais simples para esse problema está em um pacote chamado `express-async-errors`

  - Criando o servidor
  ```sh
  touch src/app.js src/server.js
  ```
  ```js
  // src/app.js
  require('express-async-errors');
  const express = require('express');

  const app = express();

  app.use(express.json());

  module.exports = app;
  ```
  ```js
  // src/server.js
  const app = require('./app');

  const PORT = 3001

  app.listen(PORT, () => console.log(`server running on port ${PORT}`));
  ```
  > Neste arquivo, por ora, houve apenas a inicialização do pacote do Express, com a função `express()`. Tudo que o Express nos dá está dentro da variável `app`, é como se ela fosse um “grande objeto” cheio de funções e informações úteis.
  
  - Script
  ```json
  "scripts": {
    "start": "node src/server.js",
  }
  ```
  > No arquivo `package.json`, insira o comando acima, dentro da chave "scripts". Agora, para rodar a aplicação basta executar o comando `npm start`

</details>





## Outras dependências & Configurações

<details>
  <summary>

### Nodemon
  </summary>

  - Instalação
  ```sh
  npm i nodemon -D
  ```
  > Usando o servidor com `nodemon`, toda vez que algum arquivo é salvo, o `nodemon` reinicia a aplicação automaticamente!

  - Script
  ```json
  "scripts": {
    "dev": "nodemon src/server.js",
  }
  ```
  > No arquivo `package.json`, insira o comando acima, dentro da chave "scripts". Agora, para rodar a aplicação com o `nodemon` basta executar o comando `npm run dev`

</details>


<details>
  <summary>
  
### Linter
  </summary>
  
  Para garantir a qualidade de escrita do código! Vamos instalar e configurar o `ESLint`
  - Instalação
  ```sh
  npx eslint --init
  ```
  > Após executar o comando acima, leia e responda atentamente as perguntas que apareceram no terminal para realizar a configuração do `ESLint`
  - Script
  ```json
  "scripts": {
    "lint": "eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json .",
  }
  ```
  > No arquivo `package.json`, insira o comando acima, dentro da chave "scripts". Agora, para que o lint realize a autocorreção do código basta executar o comando `npm run lint`

</details>


<details>
  <summary>
  
### Git
  </summary>

  Criando e configurando o arquivo `.gitignore`
  ```sh
  touch .gitignore && echo "node_modules" > .gitignore
  ```
  > Ao longo do desenvolvimento da aplicação utilize o `.gitignore` para inserir arquivos e diretórios que não devem subir para o `github`
</details>


<details>
  <summary>
  
### Mocha, Chai e Sinon
  </summary>

  Para criar os testes automatizados, vamos utilizar o `Mocha`

  `Mocha` foi originalmente projetado para o `Node.js`. É focado em vários tipos de testes, como unidade, integração e ponta a ponta (E2E). Porém, diferente do `Jest`, o `Mocha` requer outras bibliotecas para funcionar, como o `Chai` e o `Sinon`.

  O `Chai` é uma biblioteca de asserção, e o `Sinon`, implementa dubles de teste, como: spies, stubs e mocks.

  Para nos ajudar ainda mais utilizaremos o plugin `Chai HTTP`! Com ele poderemos simular uma request a nossa API sem inicializá-la manualmente.

  - Instalação
  ```sh
  npm i mocha chai chai-http sinon -D
  ```
  - Script
  ```json
  "scripts": {
    "test": "mocha tests/**/*.test.js --exit",
  }
  ```
  > No arquivo `package.json`, insira o comando acima, dentro da chave "scripts". Agora, para rodar os testes basta executar o comando `npm test`
   - Estrutura de Pastas
  ```sh
  mkdir tests && touch tests/app.test.js
  ```
  ```js
  // app.test.js

  const { describe, it } = require('mocha');
  const chai = require('chai');
  const chaiHttp = require('chai-http');
  // const sinon = require('sinon');
  // const app = require('../src/app');

  // const { expect } = chai

  chai.use(chaiHttp);

  describe('describe a group', function () {
    it('describe unit tests', function () {
      // expect(something).to.be.equal(something);
    });
  });
  ```
</details>




<details>
    <summary>

### DotEnv

  </summary>

  O pacote `dotenv` vai lidar com informações sensíveis da aplicação de uma forma mais segura. Ele vai nos ajudar a trabalhar com variáveis de ambiente. Principalmente na integração entre o `Express` e o `MySQL`.

  - Instalação
  ```sh
  npm i dotenv
  ```
  - Configurações
  ```sh
  touch .env .env.example
  ```
  ```txt
  // .env.example
  MYSQL_HOST=localhost
  MYSQL_PORT=3306
  MYSQL_USER=root
  MYSQL_PASSWORD=password
  MYSQL_DATABASE=database
  ```
  > Após criar o arquivo não se esqueça de deletar o `.example` da extensão e adicionar o `.env` ao arquivo `.gitignore`
  ```sh
  echo ".env" >> .gitignore
  ```
  > Adicione a linha abaixo no arquivo `server.js`
  ```js
  // src/server.js
  require('dotenv').config();
  // const app = require('./app');

  // const PORT = 3001

  // app.listen(PORT, () => console.log(`server running on port ${PORT}`));
  ```    
  </details>





## Banco de Dados
<details>
  <summary>

### MySQL
  </summary>

  - Docker
  ```sh
  docker run...
  ```
  - Conector
  ```sh
  npm i mysql2
  ```
  > A integração entre o `Express` e o `MySQL` será feita através do módulo `mysql2`.
  - Configurações
  ```sh
  mkdir src/models && touch src/models/connection.js
  ```
  ```js
  // src/models/connection.js
  const mysql = require('mysql2/promise');

  const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  module.exports = connection;
  ```
</details>

<details>
  <summary>
  
### MongoDB
  </summary>

  - Docker
  ```sh
  docker run --name mongodb -d -p 27017:27017 mongo:4
  ```
  - Conector
  ```sh
  npm i mongoose
  ```
</details>