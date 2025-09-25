const precos = ["10","26","8","100","2.5","18","6.2","30"];

const resultado = precos.reduce((total,item)=>total+=Number.parseFloat(item),0);

console.log(resultado);
