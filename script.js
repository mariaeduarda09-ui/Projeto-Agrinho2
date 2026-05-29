// Aguarda o DOM (HTML) carregar completamente antes de executar
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o botão pelo ID único
    const botaoInterativo = document.querySelector('#btnInterativo');

    // Verifica se o botão existe na página para evitar erros no console
    if (botaoInterativo) {
        
        // Adiciona um "escutador de eventos" para o clique
        botaoInterativo.addEventListener('click', () => {
            exibirMensagemSucesso();
        });

    }

});

function exibirMensagemSucesso() {
    alert('Incrível! Você está vendo a lógica separada da estrutura.');
    console.log('Interação realizada com sucesso no projeto Agrinho 2026.');
}

//VERSÃO 2
const precoSemente = 150.0;

function calcularInvestimentoTotal(quantidade) {
    return quantidade * precoSemente;
}

function atualizarInterface(valorTotal) {
    const display = document.getElementById("resultadoDisplay");
    display.innerText = `O investimento total é: R$ ${valorTotal.toFixed(2)}`;
    display.style.color = valorTotal > 1000 ? "orange" : "green";
}
