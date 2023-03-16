const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    const valor = precoEtiqueta - (precoEtiqueta * 0.1);
    console.log('Sua escolha foi Débito, voce recebeu 10% de desconto seu novo valor é: ',valor);
} else if (formaDePagamento === 2) {
    const valor = precoEtiqueta - (precoEtiqueta * 0.15);
    console.log('Sua escolha foi Dinheiiro, voce recebeu 15% de desconto seu novo valor é: ',valor);
} else if (formaDePagamento === 3) {
    const valor = precoEtiqueta;
    console.log('Voce escolheu 2X, sem juros o valor total: ',valor);
} else {
    const valor = precoEtiqueta + (precoEtiqueta * 0.1);
    console.log('Sua escolha foi acima de 2X, preço com juros de 10% valor total: ',valor);
}
