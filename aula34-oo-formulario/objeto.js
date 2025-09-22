const aluno = {
    nome :"Andressa",
    idade: 34,
    curso:"javascript",
    email:"andressa@email.com"
}

const mudanca = [["email","novoemail@email.com"],["idade",36]];
/*
for(let attr in aluno){
    if(attr===atributo)
        aluno[attr] = atributoValor;
}
*/

for(atrr of mudanca){
    aluno[atrr[0]] = atrr[1]
}



console.log(aluno);