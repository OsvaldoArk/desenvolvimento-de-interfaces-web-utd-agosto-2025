const atletas = ["paula","lívia","joana","rosana","emily","jéssica","marilia"];

function buscarAtletaPeloNome(nome){
    for(let nomeAtleta of atletas){
        if(nome.toLowerCase() === nomeAtleta.toLocaleLowerCase())
            return nome;
    }
    return null;
}

console.log(buscarAtletaPeloNome("Jéssika"));

console.log(atletas.includes("jéssika"));

console.log(atletas[0].startsWith("pa"));