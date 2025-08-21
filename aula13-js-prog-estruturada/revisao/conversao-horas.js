//receber um valor em segundos e converter em horas, minutos e segundos.
var tempo = 8560;

var horas = Math.trunc(8560/3600);

var minutos = Math.trunc((tempo - horas * 3600)/60);

var segundos = tempo - (horas * 3600) - (minutos * 60);

console.log("tempo:",tempo);
/*
console.log("horas:",horas);
console.log("minutos:",minutos);
console.log("segundos",segundos);
*/
console.log(horas,"h:",minutos,"m:",segundos);