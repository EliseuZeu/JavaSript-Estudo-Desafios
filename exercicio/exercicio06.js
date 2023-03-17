class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    classificarImc() {
        const imc = this.peso / (this.altura * this.altura);
        if (imc < 18.5) {
            return 'Seu imc é: ' + imc.toFixed(2) + ', abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Seu imc é: ' + imc.toFixed(2) + ', Peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Seu imc é: ' + imc.toFixed(2) + ', Acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Seu imc é: ' + imc.toFixed(2) + ', Obeso';
        } else {
            return 'Seu imc é: ' + imc.toFixed(2) + ', Obsidade Grave';
        }  
    }
}

const eliseu = new Pessoa('Eliseu', 58, 1.74);
console.log(eliseu.classificarImc());