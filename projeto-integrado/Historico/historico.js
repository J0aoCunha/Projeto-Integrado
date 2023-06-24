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

document.getElementById('titulo1').value = 'Meu Título 1';
document.getElementById('titulo2').value = 'Meu Título 2';
document.getElementById('titulo3').value = 'Meu Título 3';
document.getElementById('data1').value = '2023-01-04';
document.getElementById('data2').value = '2023-06-17';
document.getElementById('data3').value = '2023-03-15';
document.getElementById('tipo1').value = 'Palestra';
document.getElementById('tipo2').value = 'Curso';
document.getElementById('tipo3').value = 'Estágio';
document.getElementById('carga-horaria1').value = '5 horas';
document.getElementById('carga-horaria2').value = '30 horas';
document.getElementById('carga-horaria3').value = '10 horas';
document.getElementById('pontuacao1').value = '0';
document.getElementById('pontuacao2').value = '24';
document.getElementById('pontuacao3').value = '-';
document.getElementById('status1').value = 'Recusado';
document.getElementById('status2').value = 'Aprovado';
document.getElementById('status3').value = 'Pendente';