const pessoas = [
    {nome:"Lívia",peso:57,altura:1.7,dataNascimento:"1999-01-30"},
    {nome:"Paulo",peso:80,altura:1.72,dataNascimento:"2004-12-12"},
    {nome:"Eric",peso:73,altura:1.68,dataNascimento:"1988-05-20"},
    {nome:"Jussara",peso:74,altura:1.85,dataNascimento:"1985-01-01"},
    {nome:"Amanda",peso:81,altura:1.79,dataNascimento:"2005-03-02"}
]

pessoas.sort((pessoa01,pessoa02)=> pessoa01.nome.localeCompare(pessoa02.nome));
//const nomes = pessoas.map(pessoa => pessoa.nome);
//const nomes = pessoas.map(({nome}) => nome);
//console.log(nomes);
pessoas.map(({nome}) => nome).forEach(nome => console.log(nome));