const fila = ["josé","marco","inara","lucas","márcia"];

const filaMatriz = [["N001","josé"],
                    ["N002","marco"],
                    ["P001","inara"],
                    ["R001","lucas"],
                    ["N003","márcia"],
                    ["P002","armando"],
                ];

fila.push("jéssica");

const chamarProximo = (fila)=>{
    
    const atendimento = fila.shift();
    
    console.log("Próximo a ser atendido: ",atendimento);
    
    return fila;
}


chamarProximo(fila);

fila.unshift("laura");

chamarProximo(fila);

console.log("desistiu de esperar na fila",fila.pop());

chamarProximo(fila);

console.log(fila);

console.log(filaMatriz);
