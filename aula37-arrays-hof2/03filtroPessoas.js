const pessoas = [
    {nome:"Lívia",sexo:'f',peso:57,altura:1.7,dataNascimento:"1999-01-30"},
    {nome:"Paulo",sexo:'m',peso:80,altura:1.72,dataNascimento:"2004-12-12"},
    {nome:"Eric",sexo:'m',peso:73,altura:1.68,dataNascimento:"1988-05-20"},
    {nome:"Jussara",sexo:'f',peso:74,altura:1.85,dataNascimento:"1985-01-01"},
    {nome:"Amanda",sexo:'f',peso:81,altura:1.79,dataNascimento:"2005-03-02"}
]

const filtro = 'f'

const listaNova = pessoas.filter(pessoa => pessoa.sexo.toLowerCase()===filtro && pessoa.peso >= 50)
       //.map(pessoa => pessoa.nome)
       //.forEach(nome => listaNova.push(nome));

console.log(listaNova);