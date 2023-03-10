/* 
    Uma sala contem 5 alunso e para cada aluno foi sorteado um numero de 1 - 100.
    faça um programa que receba os 5 numeros sorteados para os alunso e mostre o maior numero sortedo.

    dados de entrada: 
    5
    50
    10
    98
    23

    saida: 
    98
*/

const entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };