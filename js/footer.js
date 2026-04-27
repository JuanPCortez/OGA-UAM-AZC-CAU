(function () {
 
    /* Registro global de todos los acordeones para poder cerrarlos */
    const acordeones = [];
 
    /* ── Cerrar todos excepto el indicado ── */
    function cerrarTodos(excepcion) {
        acordeones.forEach(a => {
            if (a === excepcion) return;
            a.contenido.classList.add('ocultarUnidadesUAM');
            a.contenido.classList.remove('mostrarUnidadesUAM');
            a.titulo.classList.remove('rotarFlecha');
        });
    }
 
    /* ── Registrar y activar un acordeón ── */
    function initAcordeon(tituloEl, contenidoEl) {
        if (!tituloEl || !contenidoEl) return;
 
        contenidoEl.classList.add('ocultarUnidadesUAM');
        tituloEl.style.cursor = 'pointer';
 
        const entrada = { titulo: tituloEl, contenido: contenidoEl };
        acordeones.push(entrada);
 
        tituloEl.addEventListener('click', function () {
            const estaAbierto = contenidoEl.classList.contains('mostrarUnidadesUAM');
            cerrarTodos(null);               /* cierra todos primero */
            if (!estaAbierto) {             /* si estaba cerrado, abrirlo */
                contenidoEl.classList.add('mostrarUnidadesUAM');
                contenidoEl.classList.remove('ocultarUnidadesUAM');
                tituloEl.classList.add('rotarFlecha');
            }
        });
    }
 
    /* ── Añadir flecha SVG al título si no la tiene ── */
    function addFlecha(tituloEl, claseFlecha) {
        if (tituloEl.querySelector('svg')) return;
        tituloEl.style.display        = 'flex';
        tituloEl.style.justifyContent = 'space-between';
        tituloEl.style.alignItems     = 'center';
        tituloEl.insertAdjacentHTML('beforeend',
            `<svg class="flechaItem ${claseFlecha}" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512" style="width:1.4rem;fill:var(--red);flex-shrink:0">
                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
            </svg>`
        );
    }
 
    /* ── Envolver contenido (todo menos el título) en un div colapsable ── */
    function wrapContenido(selectorContenedor, tituloEl) {
        const contenedor = document.querySelector(selectorContenedor);
        if (!contenedor) return null;
        let wrapper = contenedor.querySelector('.footer-acordeon-body');
        if (wrapper) return wrapper;
        wrapper = document.createElement('div');
        wrapper.className = 'footer-acordeon-body';
        Array.from(contenedor.children).forEach(hijo => {
            if (hijo !== tituloEl) wrapper.appendChild(hijo);
        });
        contenedor.appendChild(wrapper);
        return wrapper;
    }
 
    function setup() {
        if (window.innerWidth > 560) return;
 
        /* ── Sección 1: UAM Azcapotzalco ── */
        const t1 = document.querySelector('.fSeccion1 .fSeccionTitulo');
        if (t1) {
            addFlecha(t1, 'flechaItem1');
            initAcordeon(t1, wrapContenido('.fSeccion1Contenido', t1));
        }
 
        /* ── Sección 2: Oficina de Gestión Ambiental ── */
        const t2 = document.querySelector('.fSeccion2 .fSeccionTitulo');
        if (t2) {
            addFlecha(t2, 'flechaItem2');
            initAcordeon(t2, wrapContenido('.fSeccion2Contenido', t2));
        }
 
        /* ── Sección 3: Unidades UAM ──
           Reemplazamos la flecha antigua (que podría ser ▲) por la misma SVG */
        const t3 = document.getElementById('fSeccion3Titulo');
        const c3 = document.getElementById('deplegableUnidadesUAM');
        if (t3 && c3) {
            /* Eliminar la flecha SVG antigua y añadir la nueva homogeneizada */
            const flechaVieja = t3.querySelector('svg');
            if (flechaVieja) flechaVieja.remove();
            addFlecha(t3, 'flechaItem3');
            initAcordeon(t3, c3);
        }
 
        /* ── Sección 4: Recomendaciones ── */
        const t4 = document.querySelector('.fSeccion4 .fSeccionTitulo');
        const c4 = document.querySelector('.fSeccion4_Recomendaciones');
        if (t4) {
            addFlecha(t4, 'flechaItem4');
            initAcordeon(t4, c4);
        }
    }
 
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setup);
    } else {
        setup();
    }
 
})();