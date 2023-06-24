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