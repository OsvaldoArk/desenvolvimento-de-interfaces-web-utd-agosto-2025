const numeros  = [3,9,0,1,4,5,7];

const homens = ["Tiago","Anderson","Lucas"];

const mulheres = ["Silvia","Carla","Patrícia"];

const pessoas = [homens,mulheres];

console.log(pessoas.flat());

const alunos = [...homens,...mulheres];

alunos.sort((a,b)=> a.localeCompare(b));

numeros.sort((a,b)=> a - b);

console.log(alunos);

console.log(numeros);