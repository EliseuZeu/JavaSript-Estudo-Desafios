/* 2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90 
*/

const {gets, print} = require('./funcoes-auxiliares2');

const conjuntoNumeros = [];

let maiorNumero = -1;
let menorNumero = 200;

for (let i = 0; i < 5; i++) {
    const Numero = gets();
    if (Numero > maiorNumero) {
        maiorNumero = Numero;
    }
    if (Numero < menorNumero) {
        menorNumero = Numero;
    }
}

print(maiorNumero);
print(menorNumero);

