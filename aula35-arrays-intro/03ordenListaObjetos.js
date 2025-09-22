const alunos = [
    {id:1,nome:"Sara",idade:21,curso:"Java"},
    {id:3,nome:"Luciano",idade:30,curso:"Javascipt"},
    {id:5,nome:"Benício",idade:19,curso:"Java"},
    {id:2,nome:"Amélia",idade:18,curso:"Python"},
    {id:4,nome:"Ingrid",idade:32,curso:"Java"},
    {id:6,nome:"Jorge",idade:28,curso:"JavaScript"}
]

const ordenaPorId = (lista)=>{
    lista.sort((a,b)=>a.id-b.id);
} 

const ordernaPorNome = (lista)=>{
    lista.sort((a,b)=> a.nome.localeCompare(b.nome));
}

//ordenaPorId(alunos);

//ordernaPorNome(alunos);

//alunos.reverse();

console.log(alunos.join());