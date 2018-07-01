# socket-chat

Um aplicativo de chat em grupo desenvolvido em cima da camada de transporte do modelo OSI.

### Requisitos

Nodejs

## Como rodar a aplicação

Dentro da pasta do projeto você precisa baixar as dependências utilizando o comando:

```
npm install
```

Após isso, você deve executar o servidor, ele quem receberá as mensagens dos usuários e transmitirá para todos os outros usuários conectados, para rodá-lo utilize o comando via terminal:

```
node server.js
```

Depois disso, é necessario iniciar a instância cliente, para isso, abra um novo terminal e execute o comando:

```
node client.js
```

Para simular vários usuários conectados é necessario repetir o passo anterior.

## Como utilizar

Após iniciado, você deve inserir seu nome, após isso você ja estará conectado ao chat, para sair é só digitar o comando "sair".
