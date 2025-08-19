/**
 * Program de cadastro de dados
 *data: 19/08/25
 *versão: 1.0
 *autor: osvaldo souza
 */

//interpretada, alto nível, fracamente tipada
var nome = "Osvaldo Souza"; //string
var idade = 38;// integer (Number)
var altura = 1.63;//float (Number)
var peso = 70;//integer (Number)
var tipoSanguineo = 'A'; //char (string)
var fatorRh = '+'; //char (string)
var isDoadorDeSangue = true; //boolean

//menor unidade no meio digital é bit (0 ou 1).
//conjunto de 8 bits é o byte (00101101).
/*
console.log('nome: ',nome);
console.log('idade: ',idade);
console.log('altura: ',altura);
console.log('peso: ',peso);
console.log('tipo sanguíneo: ',tipoSanguineo+fatorRh);
console.log('é doador de sangue: ',isDoadorDeSangue);
console.table({nome,idade,altura});
*/

console.log('nome: ',nome,'\nidade: ',idade, '\naltura: ',altura, '\npeso: ',peso, '\ntipo sanguíneo: ',tipoSanguineo+fatorRh, '\né doador de sangue: ',isDoadorDeSangue);