const numeros = [2,3,4,5,6,7,8,9];
/*
const quadrado = numeros.map((item)=>{
    return Math.pow(item,2);
});
*/

numeros.map(item => item**2).forEach(item => console.log(item));
