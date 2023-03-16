const peso = 69;
const altura = 1.75;

const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log('Seu peso é: ',imc,', abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Seu peso é: ',imc,', Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Seu peso é: ',imc,', Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Seu peso é: ',imc,', Obeso');
} else {
    console.log('Seu peso é: ',imc,', Obsidade Grave');
}
