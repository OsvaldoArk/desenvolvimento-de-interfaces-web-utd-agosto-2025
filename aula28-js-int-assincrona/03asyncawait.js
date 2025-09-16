const url = "https://api.lyrics.ovh/v1/system+of+a+down/chop+suey";

const musica = async ()=> {

    const resposta = await fetch(url);

    const letra = await resposta.json();

    console.log(letra);
};

musica();