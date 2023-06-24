const list = document.querySelectorAll('.list');
function ativarLink() {
    list.forEach((item) =>
        item.classList.remove('ativar'));
    this.classList.add('ativar');
}
list.forEach((item) => item.addEventListener('click', ativarLink))