const nota1 = 5;
const nota2 = 7;
const nota3 = 9;

const media = (nota1 + nota2 + nota3) / 3;

if (media <= 5) {
    console.log('Sua Nota é: ',media,' Voce foi reprovado, estude mais na proxima vez.');
} else if (media >= 5 && media <= 7) {
    console.log('Sua Nota é: ' + media + ' Voce ficou de Recuperação, Boa Sorte na proxima.');
}else {
    console.log('Sua Nota é: ' + media + ' Parabens, Voce foi aprovado.');
}