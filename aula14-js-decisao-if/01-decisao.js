var media = 10;

if(media >= 7 && media <=10){

    console.log("aprovado");
}else if(media < 7 && media >= 3){
    console.log("recuperação");

    var recuperacao = 4;

    final = (media + recuperacao) /2;

    if(final >= 5 && final <=10){
        console.log("aprovado");
    }else{
        console.log("reprovado");
    }
}else if(media < 3 && media >=0){

    console.log("reprovado");
}else{
    console.log("nota inválida");
}