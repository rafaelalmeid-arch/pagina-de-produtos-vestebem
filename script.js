const productImages = {
    'cinza claro': 'img/img1/blusa-oversized-cinza.jpeg',
    'preto': 'img/img2/blusa-oversized-preta.jpeg',
    'verde musgo': 'img/img3/blusa-oversized-verdemusgo.jpeg',
};


const imagemPrincipal = document.getElementById('imagem-principal');
const nomeCorSpan = document.getElementById('nome-cor');
const amostrasCores = document.querySelectorAll('.amostras .cor'); 
const miniaturasCor = document.querySelectorAll('.miniatura-cor'); 


function selecionarCor(cor) {
    const corNormalizada = cor.toLowerCase();

    const novaImagemSrc = productImages[corNormalizada];
    if (novaImagemSrc) {
        imagemPrincipal.src = novaImagemSrc;
        imagemPrincipal.alt = `Blusa ${corNormalizada} - Foto Principal`;
    }

    amostrasCores.forEach((amostra) => {
        const deveEstarAtiva = amostra.dataset.cor === corNormalizada;
        amostra.classList.toggle('ativa', deveEstarAtiva);
    });

    miniaturasCor.forEach((miniatura) => {
        const deveEstarAtiva = miniatura.dataset.cor === corNormalizada;
        miniatura.classList.toggle('ativa', deveEstarAtiva);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    amostrasCores.forEach((amostra) => {
        amostra.addEventListener('click', () => {
            selecionarCor(amostra.dataset.cor);
        });
    });

    miniaturasCor.forEach((miniatura) => {
        miniatura.addEventListener('click', () => {
            selecionarCor(miniatura.dataset.cor);
        });
    });

    const corInicial = document.querySelector('.amostras .cor.ativa')?.dataset.cor || 'cinza claro';
    selecionarCor(corInicial);
});