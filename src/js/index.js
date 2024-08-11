// Funcionar os botões
/*
    Objetivo - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionado
    - passo 5 - esconder a imagem anteriormente selecionada
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    - passo 7 - esconder a informação do dragão anteriormente selecionado
    - passo 8 - mostrar a informação do dragão referente ao botao clicado
*/
//passo 1
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll('.imagem');
const informacoes = document.querySelectorAll('.informacoes');

// passo 2
botoesCarrossel.forEach((botao, índice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();
        marcarBotaoSelecionado(botao);
        esconderImagemAtiva();
        mostrarImagemDeFundo(índice);
        esconderInformacoesAtivas();
        mostrarInformacoes(índice);


    })
})

function marcarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function mostrarInformacoes(índice) {
    informacoes[índice].classList.add('ativa');
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector('.informacoes.ativa');
    informacoesAtiva.classList.remove('ativa');
}

function mostrarImagemDeFundo(índice) {
    imagens[índice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
