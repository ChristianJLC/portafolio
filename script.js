
const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_mnr7irh';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar';
                alert('Enviado correctamente!');
            }, (err) => {
                btn.value = 'Enviar';
                alert(JSON.stringify(err));
            });
    });

    document.addEventListener('DOMContentLoaded', () => {
    const secciones = ['sobremi', 'proyectos', 'skills', 'contacto'];

    function mostrarSeccion(id, scroll = false) {
        const el = document.getElementById(id);
        secciones.forEach(seccion => {
            const sec = document.getElementById(seccion);
            if (sec) {
                sec.classList.toggle('activo', seccion === id);
            }
        });
        if (scroll && el && el.classList.contains('activo')) {
            setTimeout(() => {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }

    document.querySelectorAll('.secciones__item a, .secciones__item-seleccionado a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const destino = link.getAttribute('href').replace('#', '');
            mostrarSeccion(destino, true);

            document.querySelectorAll('.secciones__item, .secciones__item-seleccionado').forEach(item => {
                item.classList.remove('secciones__item-seleccionado');
                item.classList.add('secciones__item');
            });
            link.parentElement.classList.add('secciones__item-seleccionado');
            link.parentElement.classList.remove('secciones__item');
        });
    });

    mostrarSeccion('sobremi');
});


