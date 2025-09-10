const atletas = ["paula","lívia","joana","rosana","emily","jéssica","marilia"];

const [primeiro,segundo,terceiro] = atletas

const colocacao = [primeiro,segundo,terceiro];

const cores = ["yellow","gray","brown"];

const premios = ["ouro","prata","bronze"];

const corpo = document.getElementById("corpo");

for(let indice in colocacao){

    const tr = document.createElement("tr");

    const pod = document.createElement("td");

    const prem = document.createElement("td");

    const nom = document.createElement("td");

    pod.innerHTML = `${Number.parseInt(indice)+1} 
                    <i class='bi bi-trophy-fill' style="color:${cores[indice]}"></i>`;
    
    prem.innerHTML = premios[indice];

    nom.innerText = colocacao[indice];

    tr.appendChild(pod);

    tr.appendChild(prem);

    tr.appendChild(nom);

    corpo.appendChild(tr);
}