var numero = 1, contador = 0;

while(numero <=10){

    while(contador<=10){
        console.log(numero," x ",contador," = ",(numero * contador));

        contador++;
    }

    contador=0;

    numero++;

    console.log("================")
}
