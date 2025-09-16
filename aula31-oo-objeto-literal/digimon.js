document.getElementById("formulario").addEventListener("submit", async (evento)=>{
    const painel = document.getElementById("painel");
    
    evento.preventDefault();


    const nomeDigimon = document.getElementById("nomeId").value;

    try{

        const resposta = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${nomeDigimon}`);
    
        const [dados] = await resposta.json();
    
        const {name,level,img} = dados;
    
        console.log(dados);
    
        painel.innerHTML = `<h1>${name}</h1>
                            <h3>${level}</h3>
                            <img src="${img}" alt="">`
    }catch(erro){
        painel.innerHTML = `${erro}`;
    }

});