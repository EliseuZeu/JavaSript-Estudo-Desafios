class Pessoa {

    nome;
    idade;
    anoDeNascimento;


    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome e ${this.nome} e minha idade e ${this.idade}`);
    }
}


const pessoa = {
    nome: "Eliseu F de Souza",
    idade: 25,
    sexo: "M",
    descrever: function() {
        console.log(`Meu nome e ${this.nome} e minha idade e ${this.idade}`);
    }
};

pessoa.descrever();


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} e mais velho(a) que ${p2.nome}`);
    }
    else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} e mais velho(a) que ${p1.nome}`)
    }
    else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const eliseu = new Pessoa('Eliseu',25);
const josue = new Pessoa('Josue',17);

compararPessoas(eliseu,josue);