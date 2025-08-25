var letra = 'e',consoantes = 'bcdfghjklmnpqrstvwxyz';

letra = letra.toLowerCase();

var condicaoVogal = letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u';

if(condicaoVogal){
    console.log('a letra digitada é uma vogal.');
}
else if(consoantes.includes(letra)){
    console.log('a letra digitada é uma consoante');
}
else{
    console.log('o caractere não é uma letra');
}
