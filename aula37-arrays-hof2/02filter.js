const numeros = [1,2,3,4,5,6,7,8,9];

/*========================================================
const impares = []

for(let numero of numeros){
    if(numero % 2 !== 0)
        impares.push(numero);
}
//=========================================================*/

impares = numeros.filter(num => num % 2 === 0);

console.log(impares);