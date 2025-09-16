const numero = 37;

const minhaPromessa = new Promise(function(resolve,reject){
    if(numero % 2 === 0){
       resolve("o número é par");
    }

    reject("o número é ímpar");
})

minhaPromessa.then(
    res =>{console.log(res);},
    error=>{console.log(error)}
);