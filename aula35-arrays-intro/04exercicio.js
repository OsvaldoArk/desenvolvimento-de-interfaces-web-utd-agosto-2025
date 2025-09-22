const pessoas = [
    {nome:"Lívia",peso:57,altura:1.7,dataNascimento:"1999-01-30"},
    {nome:"Paulo",peso:80,altura:1.72,dataNascimento:"2004-12-12"},
    {nome:"Eric",peso:73,altura:1.68,dataNascimento:"1988-05-20"},
    {nome:"Jussara",peso:74,altura:1.85,dataNascimento:"1985-01-01"},
    {nome:"Amanda",peso:81,altura:1.79,dataNascimento:"2005-03-02"},
    {nome:"Luíz",peso:90,altura:1.75,dataNascimento:"1972-09-28"},
    {nome:"Michele",peso:62,altura:1.62,dataNascimento:"1987-12-31"},
]

const imprimeLista = (lista)=>{

    console.log("===============================");

    for(const linha of pessoas){
            console.log("nome: ",linha.nome);
            console.log("peso: ",linha.peso);
            console.log("altura: ",linha.altura);
            const dataBrasil = linha.dataNascimento.split("-").reverse().join("/");
            console.log("data de nascimento: ",dataBrasil);
        console.log("===============================");
    }
}

imprimeLista(pessoas);