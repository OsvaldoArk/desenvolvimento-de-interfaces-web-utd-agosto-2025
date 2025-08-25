var salario = 5000, emprestimo = 30000, tempoAno = 5, taxaAoMes = 4.2, numeroParcelas = tempoAno * 12;

var juros = emprestimo * taxaAoMes/100 * numeroParcelas;

var montante = emprestimo + juros;

var prestacaoEmprestimo = montante / numeroParcelas; 

if(prestacaoEmprestimo <= salario * 0.3){
    console.log('empréstimo autorizado');
}else{
    console.log('empréstimo negado');
}
console.log('======Dados da simulação======');
console.log('salário base: ',salario);
console.log('empréstimo: ',emprestimo);
console.log('quantidade de parcelas: ',numeroParcelas);
console.log('taxa de juros: ',taxaAoMes,' a.m.');
console.log('montante: ',montante);
console.log('valor parcela: ',prestacaoEmprestimo);