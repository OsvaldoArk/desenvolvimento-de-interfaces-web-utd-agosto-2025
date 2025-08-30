var idades = [],somaIdades = 0,resultado = "",maiorDeVinteECinco = 0;

for(var cont = 1; cont <= 10; cont++){
    var idade = Math.round(Math.random()*20+18);

    idades.push(idade);
}

for(var cont = 0; cont < 10; cont++){

    somaIdades+=idades[cont];

    if(idades[cont] > 25)
        maiorDeVinteECinco++;

    resultado = resultado.concat(idades[cont]+" ");
}


console.log(resultado);
console.log("soma das idades: ",somaIdades);
console.log("média idades: ",(somaIdades)/idades.length);
console.log("maior de 25 anos: ",maiorDeVinteECinco);

