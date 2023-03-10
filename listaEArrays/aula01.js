/*
const notas = [5, 8, 5, 9];

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

console.log(soma/4);
/*

/*
    1) Crie um programa que dado um numero imprima a sua tabuada.
*/ 

let tabuada = 1;

for (let i = 1; i <= 10; i++){
    const numero = i*tabuada;
    console.log(`${i} X ${tabuada}= ${numero}`);
}

/*
    2) Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero encontrado.
*/ 

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, ,8 ,9 , 10];

for (let i = 0; i < listaNumeros.length; i++){
    const numeros = listaNumeros[i];
    if (numeros % 2 === 0) {
        console.log(`o Numero ${numeros} é Par`);
    } 
}