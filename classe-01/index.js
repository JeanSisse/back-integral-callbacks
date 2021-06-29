const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];


const cidadesFiltradas = cidades.filter(x => x.length <= 8).join(", ");

console.log(cidadesFiltradas);