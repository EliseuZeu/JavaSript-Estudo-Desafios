/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto medio de combustivel por KM rodado.
Crie um metodo que dado a quantidade de quilometros e o preço do combustivel nos de o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKM;

    constructor(marca, cor, gastoMedioPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

    caucularViagem(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKM * precoCombustivel;
    }
}

const uno = new Carro ('Fiat', 'Prata', 1 / 10);
console.log(uno.caucularViagem(70, 5));

