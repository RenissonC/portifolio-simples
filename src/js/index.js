const botaomostrarprojetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')


botaomostrarprojetos.addEventListener('click', () => {
    mostrarMaisprojetos();
    esconderbotao();
})
function esconderbotao() {
    botaomostrarprojetos.classList.add("remover");
}

function mostrarMaisprojetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

