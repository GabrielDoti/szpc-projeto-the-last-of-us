// dar um jeito de pegar o elemento HTML dos botoes
const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//dar um jeito de identificar o clique do usurio
botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();

        selecionarBotaoCarrosel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundoCorrespondente(indice);
    })
})

function mostrarImagemDeFundoCorrespondente(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
