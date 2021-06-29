const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

function encontre_endereco(cep){
    const ruaFiltrado = endereços.find(x => x.cep === cep);
    return ruaFiltrado.rua;
}

console.log(encontre_endereco(00222444));
