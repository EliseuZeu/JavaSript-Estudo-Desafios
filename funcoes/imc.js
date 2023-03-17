function calcularImc(altura, peso) {
    return peso / Math.pow(altura, 2);
}

function classificarImc (imc) {
    if (imc < 18.5) {
        return 'Seu peso é: ' + imc.toFixed(2) + ', abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Seu peso é: ' + imc.toFixed(2) + ', Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Seu peso é: ' + imc.toFixed(2) + ', Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Seu peso é: ' + imc.toFixed(2) + ', Obeso';
    } else {
        return 'Seu peso é: ' + imc.toFixed(2) + ', Obsidade Grave';
    }  
}

function main () {
    const peso = 50;
    const altura = 1.78;

    const imc = calcularImc(altura, peso);
    console.log(classificarImc(imc));
}

main();