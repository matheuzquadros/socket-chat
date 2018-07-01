# socket-chat

Um aplicativo de chat em grupo desenvolvido em cima da camada de transporte do modelo OSI.

### Requisitos

Node.js

## Como rodar a aplicação

Dentro da pasta do projeto é necessário baixar as dependências do projeto utilizando o comando:

```
npm install
```

Após isso, você deverá executar o servidor, é ele quem receberá as mensagens dos usuários e transmitirá para todos os demais usuários conectados, para rodá-lo utilize o comando via terminal:

```
node app/server.js
```

Depois disso, é necessario iniciar a instância cliente, para isso, abra um novo terminal e execute o comando:

```
node app/client.js
```

Para simular vários usuários conectados é necessario repetir o passo anterior.

## Como utilizar

Após iniciado, você deve inserir seu nome, depois disso você ja estará conectado ao chat. Para sair é só digitar o comando "sair".
