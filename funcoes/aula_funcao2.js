function escreverMeuNome(nome) {
   return "Meu nome é " + nome;
}

/* escreverMeuNome('Eliseu');
escreverMeuNome('Renan'); */


function verificarIdade (idade) {
    if (idade >= 18) {
        console.log(escreverMeuNome('Eliseu') + ' Voce e maior de idade');
    } 
    else {
        console.log('Voce e menor de idade');
    }
}

verificarIdade(25);