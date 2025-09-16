const cep = document.getElementById("cepId");

const logradouroForm = document.getElementById("logradouroId");

const bairroForm = document.getElementById("bairroId");

const municipioForm = document.getElementById("municipioId");

const estadoForm = document.getElementById("estadoId");

cep.addEventListener("blur",async ()=>{

    const input = cep.value;
    
    const resposta = await fetch(`https://viacep.com.br/ws/${input}/json/`);

    const {logradouro, bairro,localidade, estado} = await resposta.json();
    
    logradouroForm.value = logradouro;

    bairroForm.value = bairro;

    municipioForm.value = localidade;

    estadoForm.value = estado;
});