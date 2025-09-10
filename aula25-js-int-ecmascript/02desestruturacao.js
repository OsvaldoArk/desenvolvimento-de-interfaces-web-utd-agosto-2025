const atletas = ["paula","lívia","joana","rosana","emily","jéssica","marilia"];

const [primeiroLugar,segundoLugar,terceiroLugar,...medalhas] = atletas;

console.log("1º: ",primeiroLugar);
console.log("2º: ",segundoLugar);
console.log("3º: ",terceiroLugar);
console.log("medalhistas: ",medalhas);