const url = "https://api.lyrics.ovh/v1/oasis/wonderwall";

fetch(url).then(res => res.json(), error => console.log(error))
          .then(res => console.log(res));
          
