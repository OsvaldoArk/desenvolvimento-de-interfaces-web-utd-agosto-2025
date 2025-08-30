var numeros = [3,19,7,9,1,2,4,8,6,5,10,16,8,12,4]

//numeros.sort((x,y)=> x-y);

function ordernar(vetor){

    for(var atual = 0; atual < vetor.length-1; atual++){

        for(var proximo = atual+1; proximo < vetor.length;proximo++){

            if(vetor[atual]>vetor[proximo]){
                var temp = vetor[atual];

                vetor[atual] = vetor[proximo];

                vetor[proximo] = temp;
            }
        }
    }
}

ordernar(numeros);

console.log(numeros);