var net = require('net'),
	readline = require('readline');

var client = new net.Socket();
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Por favor, digite seu nome: ", function (nome) {

	var msg = `${nome} entrou na conversa.`;

	client.connect(5000, '127.0.0.1', function () {
		client.write(msg);
	});

	client.on('data', function (data) {
		console.log(String.fromCharCode.apply(null, data));
	});

	client.on('close', function () {
		console.log('Você saiu da conversa.');
	});

	rl.prompt(true);
	rl.setPrompt(`${nome}: `);

	rl.prompt();
	rl.on('line', function (msg) {
		if (msg === "sair") {
			sairDoChat(nome)
		} else {
			client.write(`${nome}: ${msg}`)
		}
		rl.prompt();
	}).on('close', function () {
		process.exit(0);
	});
});

function sairDoChat(nome) {
	client.write(`${nome} saiu da conversa.`);
	client.destroy();
	rl.close();
}