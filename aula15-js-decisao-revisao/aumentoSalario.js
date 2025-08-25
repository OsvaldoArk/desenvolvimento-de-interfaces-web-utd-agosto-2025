var salario = 2300,salarioFinal=0, tempoServico = 5,aumento=0;

if(tempoServico>= 5){
    aumento = 20/100;
}
else{
    aumento = 10/100;
}

salarioFinal = salario + (salario * aumento);
console.log('salário base: ',salario);
console.log('tempo de empresa: ',tempoServico);
console.log('aumento: ',aumento);
console.log(salario,'+ ',(salario * aumento), '= ',salarioFinal);