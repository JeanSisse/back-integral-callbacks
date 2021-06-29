const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

const tempo = 10;
let index = -1;
let tempoEsgotado = 0;

function  imprimirVez(){
	
	if (tempoEsgotado === tempo){
		console.log(`A rodada terminou!`);
		clearInterval(intervalID);
	} else {
		console.log(jogadores[++index]);
	}

	tempoEsgotado += tempo/jogadores.length;	
}

imprimirVez();

const intervalID = setInterval(imprimirVez, tempo/jogadores.length*1000);