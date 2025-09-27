const alunos = [
  { nome: 'Diogo', media: 5.5 },
  { nome: 'Julia', media: 9.5 },
  { nome: 'Roberto', media: 1.5 },
  { nome: 'Tiago', media: 6.0 }
];

const aprovados = alunos.filter(aluno => aluno.media >= 6.0)
                        .map(aluno => aluno.nome)
                        //.forEach(aluno => console.log(aluno));

console.log(aprovados);