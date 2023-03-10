// 1) Faça um programa que receba a media de um aluno.
// Caso a media seja < 5 imprima 'Reprovado'
// Caso a media seja >= 5 e < 7 imprimir "Recuperacao"
// Caso a media seja >= 7 imprimir "Aprovado"

const media = gets();

if (media < 5) {
    print("Reprovado");
} else if (media >= 5 && media < 7){
    print("Recuperacao");
} else {
    print("Aprovado");
}




const {gets, print} = require('./funcao-auxiliares01');