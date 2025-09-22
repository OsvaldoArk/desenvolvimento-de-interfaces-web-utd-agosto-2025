const aluno = {nome:"aluno",idade:0,curso:"nenhum",email:"vazio"};

//const inputs = document.querySelectorAll("input");
const inputs = document.getElementsByTagName("input");

const info = document.getElementById("info");

for(let input of inputs){
    for(let atributo in aluno){
        if(input.name===atributo){
            input.value = aluno[atributo];
        }
    }
}

for(let input of inputs){
    input.addEventListener("change",(evento)=>{

        const {name, value} = evento.target;
        
        aluno[name] = value;

        info.innerHTML = "";

        for(attr in aluno){

            const p = document.createElement("p");

            p.innerText = `${attr} : ${aluno[attr]}`;

            info.appendChild(p);
        }
    });
}