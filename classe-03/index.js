const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const frutasNumerado = frutas.map((fruta, index) => {
	return `${index} - ${fruta}`
});

console.log(frutasNumerado);