const fs = require('fs');
const msg = "Estou aprendendo JavaScript na Cubos Academy";

fs.writeFile("meuarquivo.txt", msg, () => {
	console.log("Arquivo foi escrito com sucesso.");
	// console.log(fs.readFileSync('meuarquivo.txt').toString());
});