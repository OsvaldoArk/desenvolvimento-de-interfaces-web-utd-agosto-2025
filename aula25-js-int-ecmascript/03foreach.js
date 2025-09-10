const atletas = ["paula","lívia","joana","rosana","emily","jéssica","marilia"];
/*
for(let indice = 0; indice < atletas.length; indice++){
    console.log(atletas[indice]);
}

for(let pedaco of atletas){
    console.log(pedaco);
}

const matriz = [[0,1,2],[2,4,6],[1,3,5]];

for(let linha of matriz){
    for(let coluna of linha){
        console.log(coluna);
    }
    console.log('------')
}
*/

const matriz = [[0,1,2],[2,4,6],[1,3,5]];

for(let linha in matriz){
    for(let coluna in matriz[linha]){
        console.log(matriz[linha][coluna]);
    }
    console.log('------')
}
