const frutas = ["limao","laranja","limao","kiwi","limao","mamao","kiwi","limao","laranja"];

const agrupamento = frutas.reduce((resultado,fruta)=>{

    if(!resultado.hasOwnProperty(fruta)) resultado[fruta] = 0
    
    resultado[fruta]++;

    return resultado;
},{});

console.log(agrupamento);