var resultadoPesquisa = [],numeroPessoasNaPesquisa = 5,somaSalario=0,somaFilhos=0,
    maiorSalario = 0, numeroPessoasSalarioAteLimite = 0;
//criar as respostas aleatórias a pesquisa.
for(var cont = 1; cont<=numeroPessoasNaPesquisa;cont++){

    var salario = Math.round(Math.random()*3000+1500);

    var numeroFilhos = Math.round(Math.random()*3);

    resultadoPesquisa.push([salario,numeroFilhos]);
}

//responder a questão [regra de negócio]
for(var cont = 0; cont<resultadoPesquisa.length;cont++){

    somaSalario+=resultadoPesquisa[cont][0];

    if(resultadoPesquisa[cont][0]> maiorSalario)
        maiorSalario = resultadoPesquisa[cont][0];

    if(resultadoPesquisa[cont][0]<=2000)
        numeroPessoasSalarioAteLimite++;

    somaFilhos+=resultadoPesquisa[cont][1];
}
//tratamento de dados.
var mediaSalarios = somaSalario/resultadoPesquisa.length;

var porcentagem = numeroPessoasSalarioAteLimite * 100 / resultadoPesquisa.length;

var mediaFilhos = somaFilhos/resultadoPesquisa.length;
// ---------------------------------------------------------------------------------
//mostra o resultado da pesquisa.
for(var cont = 0; cont<resultadoPesquisa.length;cont++){
    console.log(cont,"- salário: ",resultadoPesquisa[cont][0],
                    ", número de filhos: ",resultadoPesquisa[cont][1]);
}

console.log("média sálarios: ",mediaSalarios);
console.log("maior salário: ",maiorSalario);
console.log("pessoas que ganham até R$2.000,00 (%)",porcentagem);
console.log("média filhos: ",mediaFilhos);
