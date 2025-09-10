
export function exponencial(base, expoente){
    let result = base;
    
    for(let cont = 0; cont<expoente-1;cont++){
        result*=base;
    }

    return result;
}
