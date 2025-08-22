var numero01 = 100, numero02 = 50, numero03 = 180;

if(numero01 > numero02){

    if(numero01 > numero03){

        if(numero02>numero03){
            console.log(numero01,", ",numero02,", ",numero03);
        }else{
            console.log(numero01,", ",numero03,", ",numero02);
        }
    }else{
        console.log(numero03,", ",numero01,", ",numero02);
    }
}else{
    if(numero02>numero03){
        if(numero01>numero03){
            console.log(numero03,", ",numero01,", ",numero02);
        }
        else{
            console.log(numero01,", ",numero03,", ",numero02);
        }
    }else{
        console.log(numero03,", ",numero02,", ",numero01);
    }
}