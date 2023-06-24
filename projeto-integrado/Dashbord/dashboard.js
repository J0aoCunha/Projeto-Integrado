document.addEventListener('DOMContentLoaded', function () {
    const list = document.querySelectorAll('.list');
    const currentPage = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

    function ativarLink() {
        list.forEach((item) => {
            item.classList.remove('ativar');
        });
        this.classList.add('ativar');
    }

    list.forEach((item) => {
        const link = item.querySelector('a');
        const href = link.getAttribute('href');
        const page = href.substring(href.lastIndexOf('/') + 1);

        if (currentPage === page) {
            item.classList.add('ativar');
        } else {
            item.classList.remove('ativar');
        }

        item.addEventListener('click', ativarLink);
    });
});

const pontuacaoInput = document.getElementById('pontuacao');
const informacoesDiv = document.getElementById('informacoes');
const pontuacao = 75;
pontuacaoInput.value = pontuacao;
exibirInformacoes(pontuacao, informacoesDiv);

const reprovadoInput = document.getElementById('reprovados');
const informacoes2Div = document.getElementById('informacoes2');
const pontuacao2 = 2;
reprovadoInput.value = pontuacao2;
exibirInformacoes(pontuacao2, informacoes2Div);

const aprovadosInput = document.getElementById('aprovados');
const informacoes3Div = document.getElementById('informacoes3');
const pontuacao3 = 3;
aprovadosInput.value = pontuacao3;
exibirInformacoes(pontuacao3, informacoes3Div);

const pendenteInput = document.getElementById('pendentes');
const informacoes4Div = document.getElementById('informacoes4');
const pontuacao4 = 1;
pendenteInput.value = pontuacao4;
exibirInformacoes(pontuacao4, informacoes4Div);

function exibirInformacoes(pontuacao, informacoesDiv) {
}