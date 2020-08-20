//Butao para o responsivo
document.querySelector(".menu-abrir").onclick = function() {
    document.documentElement.classList.add('menu-ativo');
};

document.querySelector('.menu-fechar').onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
};
//Background cinza para responsivo
document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};