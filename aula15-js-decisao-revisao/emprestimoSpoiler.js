var salario = 0, emprestimo = 0, taxaAoMes = 3.4, numeroParcelas = 0;

document.querySelector('#enviar').addEventListener('click',(evento)=>{

    evento.preventDefault();

    salario = Number.parseFloat(document.querySelector('#salario').value);

    emprestimo = Number.parseFloat(document.querySelector('#emprestimo').value);

    numeroParcelas = Number.parseFloat(document.querySelector('#parcelas').value);

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
    console.log('valor parcela: ',prestacaoEmprestimo.toString().replace('.',','));
});
