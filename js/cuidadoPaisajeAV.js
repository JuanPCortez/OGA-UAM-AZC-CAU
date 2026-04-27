// ── TARJETAS EN MODO CELULAR (PTAR) ───────────────────────────────
/* ═══════════════════════════════════════════════════════
   PTAR — Carrusel móvil con flechas y dots en la parte baja
   Reemplaza el JS anterior del carrusel PTAR.
═══════════════════════════════════════════════════════ */
 
document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.querySelector('.PTARcelular__tarjetas');
    const tarjetas   = document.querySelectorAll('.PTARcelular__tarjetas .PTARcelular__tarjeta');
    const prevBtn    = document.querySelector('.PTARcelular__prevBtn');
    const nextBtn    = document.querySelector('.PTARcelular__nextBtn');
 
    if (!contenedor || !tarjetas.length || !prevBtn || !nextBtn) return;
 
    let currentIndex = 0;
 
    /* ── Crear barra de navegación inferior ── */
    const navBar = document.createElement('div');
    navBar.className = 'ptar-nav-bar';
    navBar.innerHTML = `
        <div class="ptar-dots"></div>
    `;
 
    /* Mover los botones al navBar */
    const dotsWrap = navBar.querySelector('.ptar-dots');
    navBar.insertBefore(prevBtn, dotsWrap);
    navBar.appendChild(nextBtn);
 
    /* Insertar navBar después del contenedor de tarjetas */
    contenedor.parentNode.insertBefore(navBar, contenedor.nextSibling);
 
    /* ── Generar dots según número de tarjetas ── */
    const dots = [];
    tarjetas.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'ptar-dot' + (i === 0 ? ' activo' : '');
        dot.addEventListener('click', () => irA(i));
        dotsWrap.appendChild(dot);
        dots.push(dot);
    });
 
    /* ── Mostrar tarjeta activa ── */
    function mostrar(index) {
        tarjetas.forEach((t, i) => {
            t.style.display = i === index ? 'grid' : 'none';
        });
        dots.forEach((d, i) => {
            d.classList.toggle('activo', i === index);
        });
        currentIndex = index;
    }
 
    function irA(index) {
        mostrar((index + tarjetas.length) % tarjetas.length);
    }
 
    mostrar(0);
 
    nextBtn.addEventListener('click', () => irA(currentIndex + 1));
    prevBtn.addEventListener('click', () => irA(currentIndex - 1));
});
 
 
// ── GALERÍA DE FOTOS ──────────────────────────────────────────────
(function () {
    const INTERVALO = 15000;
 
    const slides = document.querySelectorAll('.galeria__slide');
    const dots   = document.querySelectorAll('.galeria__dot');
    const barra  = document.getElementById('progreso');
    let actual   = 0;
    let animRaf  = null;
    let inicio   = null;
 
    function irA(index) {
        slides[actual].classList.remove('activo');
        dots[actual].classList.remove('activo');
        actual = (index + slides.length) % slides.length;
        slides[actual].classList.add('activo');
        dots[actual].classList.add('activo');
    }
 
    function iniciarBarra() {
        cancelAnimationFrame(animRaf);
        barra.style.transition = 'none';
        barra.style.width = '0%';
        inicio = performance.now();
 
        function paso(ahora) {
            const pct = Math.min(((ahora - inicio) / INTERVALO) * 100, 100);
            barra.style.width = pct + '%';
            if (pct < 100) {
                animRaf = requestAnimationFrame(paso);
            } else {
                irA(actual + 1);
                iniciarBarra();
            }
        }
        animRaf = requestAnimationFrame(paso);
    }
 
    function reiniciar(index) {
        cancelAnimationFrame(animRaf);
        irA(index);
        iniciarBarra();
    }
 
    dots.forEach(dot => {
        dot.addEventListener('click', () => reiniciar(parseInt(dot.dataset.index)));
    });
 
    const carrusel = document.getElementById('carrusel');
    carrusel.addEventListener('mouseenter', () => cancelAnimationFrame(animRaf));
    carrusel.addEventListener('mouseleave', () => {
        inicio = performance.now() - (parseFloat(barra.style.width) / 100 * INTERVALO);
        function paso(ahora) {
            const pct = Math.min(((ahora - inicio) / INTERVALO) * 100, 100);
            barra.style.width = pct + '%';
            if (pct < 100) { animRaf = requestAnimationFrame(paso); }
            else { irA(actual + 1); iniciarBarra(); }
        }
        animRaf = requestAnimationFrame(paso);
    });
 
    let touchX = null;
    carrusel.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; });
    carrusel.addEventListener('touchend',   e => {
        if (touchX === null) return;
        const diff = touchX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) reiniciar(actual + (diff > 0 ? 1 : -1));
        touchX = null;
    });
 
    iniciarBarra();
})();
 
 
// ── FICHA TÉCNICA DE ÁRBOLES ──────────────────────────────────────
(function () {
 
    const ESPECIES = {
        "taxodium-mucronatum": {
            nombreCientifico: "Taxodium mucronatum",
            nombreComun:      "Ahuehuete",
            endemico:         "Nativa de México",
            descripcion:      "Especie riparia de gran resistencia, asociada a cuerpos de agua. Su longevidad y diámetro lo colocan como árbol potencialmente monumental.",
            caracteristicas: [
                "Longevidad extrema (puede superar 1,000 años).",
                "Árbol nacional de México.",
                "Alto valor histórico, cultural y simbólico."
            ],
            ejemplaresUAM: "7 Ejemplares en la UAM-A",
            fotos: [
                "../images/cuidadoPaisajeAV/ahuehuete/ahuehuetearbol.webp",
                "../images/cuidadoPaisajeAV/ahuehuete/ahuehuetecono.webp",
                "../images/cuidadoPaisajeAV/ahuehuete/ahuehuetehoja.webp",
                "../images/cuidadoPaisajeAV/ahuehuete/ahuehuetetronco.webp",
                "../images/cuidadoPaisajeAV/ahuehuete/mini_ahuehuete.webp"
            ]
        },
        "chiranthodendron-pentadactylon": {
            nombreCientifico: "Chiranthodendron pentadactylon",
            nombreComun:      "Árbol de las manitas",
            endemico:         "Endémico de México",
            descripcion:      "Especie relicta de bosques mesófilos. Su valor radica en su singularidad morfológica.",
            caracteristicas: [
                "Flor con morfología única en forma de mano.",
                "Endemismo nacional.",
                "Rareza en entornos urbanos."
            ],
            ejemplaresUAM: "2 Ejemplares en la UAM-A",
            fotos: [
                "../images/cuidadoPaisajeAV/arbol_manitas/manitasarbol.webp",
                "../images/cuidadoPaisajeAV/arbol_manitas/manitasflor.webp",
                "../images/cuidadoPaisajeAV/arbol_manitas/manitashoja.webp",
                "../images/cuidadoPaisajeAV/arbol_manitas/manitastronco.webp",
                "../images/cuidadoPaisajeAV/arbol_manitas/mini_arbol_manitas.webp"
            ]
        },
        "ceiba-speciosa": {
            nombreCientifico: "Ceiba speciosa",
            nombreComun:      "Ceiba",
            endemico:         "Exótica",
            descripcion:      "Especie con potencial monumental por diámetro y copa amplia.",
            caracteristicas: [
                "Tronco espinoso distintivo.",
                "Porte voluminoso y llamativo.",
                "Alto valor paisajístico."
            ],
            ejemplaresUAM: "14 Ejemplares en la UAM-A",
            fotos: [
                "../images/cuidadoPaisajeAV/ceiba/ceibaarbol.webp",
                "../images/cuidadoPaisajeAV/ceiba/ceibaflor.webp",
                "../images/cuidadoPaisajeAV/ceiba/ceibafruto.webp",
                "../images/cuidadoPaisajeAV/ceiba/ceibahoja.webp",
                "../images/cuidadoPaisajeAV/ceiba/ceibatronco.webp",
                "../images/cuidadoPaisajeAV/ceiba/mini_ceiba.webp"
            ]
        },
        "erythrina-coralloides": {
            nombreCientifico: "Erythrina coralloides",
            nombreComun:      "Colorín",
            endemico:         "Nativa de México",
            descripcion:      "Reconocido por su floración roja intensa y muy vistosa, que ocurre generalmente cuando el árbol ha perdido sus hojas, creando un fuerte impacto paisajístico.",
            caracteristicas: [
                "Importancia para polinizadores.",
                "Capacidad de fijar nitrógeno en el suelo.",
                "Valor cultural tradicional."
            ],
            ejemplaresUAM: "95 Ejemplares en la UAM-A",
            fotos: [
                "../images/cuidadoPaisajeAV/colorin/colorinarbol.webp",
                "../images/cuidadoPaisajeAV/colorin/colorinflor.webp",
                "../images/cuidadoPaisajeAV/colorin/colorinfruto.webp",
                "../images/cuidadoPaisajeAV/colorin/colorinhoja.webp",
                "../images/cuidadoPaisajeAV/colorin/colorintronco.webp",
                "../images/cuidadoPaisajeAV/colorin/mini_colorin.webp"
            ]
        },
        "annona-cherimola": {
            nombreCientifico: "Annona cherimola",
            nombreComun:      "Chirimoyo",
            endemico:         "Nativa de México",
            descripcion:      "Árbol frutal, considerada entre las frutas tropicales más finas por su sabor y textura cremosa.",
            caracteristicas: [
                "Valor genético y frutal.",
                "Interés agroforestal."
            ],
            ejemplaresUAM: "2 Ejemplares en la UAM-A",
            fotos: [
                "../images/cuidadoPaisajeAV/chirimoyo/chirimoyoarbol.webp",
                "../images/cuidadoPaisajeAV/chirimoyo/chirimoyoflor.webp",
                "../images/cuidadoPaisajeAV/chirimoyo/chirimoyohoja.webp",
                "../images/cuidadoPaisajeAV/chirimoyo/chirimoyotronco.webp",
                "../images/cuidadoPaisajeAV/chirimoyo/mini_chirimoyo.webp"
            ]
        },
        "magnolia-grandiflora": {
            nombreCientifico: "Magnolia grandiflora",
            nombreComun:      "Magnolia",
            endemico:         "Exótica",
            descripcion:      "Árbol ornamental perennifolio ampliamente valorado por sus grandes flores blancas y fragantes, consideradas entre las más espectaculares del arbolado urbano.",
            caracteristicas: [
                "Floración excepcional.",
                "Linaje evolutivo antiguo.",
                "Longevidad y presencia monumental."
            ],
            ejemplaresUAM: "12 Ejemplares en la UAM-A",
            fotos: [
                "../images/cuidadoPaisajeA/magnolia/magnoliaarbol.webp",
                "../images/cuidadoPaisajeAV/magnolia/magnoliaflor.webp",
                "../images/cuidadoPaisajeAV/magnolia/magnoliafruto.webp",
                "../images/cuidadoPaisajeAV/magnolia/magnoliahoja.webp",
                "../images/cuidadoPaisajeAV/magnolia/magnoliatronco.webp",
                "../images/cuidadoPaisajeAV/magnolia/mini_magnolia.webp"
            ]
        },
        "quercus-urbanii": {
            nombreCientifico: "Quercus urbanii",
            nombreComun:      "Encino",
            endemico:         "Nativa de México",
            descripcion:      "Especie nativa representativa de los encinos mexicanos, grupo con alta diversidad en el país y de gran relevancia ecológica para la conservación de los bosques templados.",
            caracteristicas: [
                "Importancia ecológica.",
                "Baja representación en zonas urbanas.",
                "Alto valor ecológico."
            ],
            ejemplaresUAM: "5 Ejemplares en la UAM-A",
            fotos: [
                "../images/cuidadoPaisajeAV/encino(urbani)/qurbaniarbol.webp",
                "../images/cuidadoPaisajeAV/encino(urbani)/qurbaniafruto.webp",
                "../images/cuidadoPaisajeAV/encino(urbani)/qurbaniahoja.webp",
                "../images/cuidadoPaisajeAV/encino(urbani)/qurbaniatronco.webp",
                "../images/cuidadoPaisajeAV/encino(urbani)/mini_urbani.webp"
            ]
        },
        "quercus-purulhana": {
            nombreCientifico: "Quercus purulhana",
            nombreComun:      "Encino",
            endemico:         "",
            descripcion:      "Forma parte del grupo de los encinos mesoamericanos, especies clave para la conservación de la biodiversidad y el funcionamiento ecológico de los bosques templados.",
            caracteristicas: [
                "Distribución restringida.",
                "Valor ecológico en conservación."
            ],
            ejemplaresUAM: "5 Ejemplares en la UAM-A",
            fotos: [
                "../images/cuidadoPaisajeAV/encinopirulento(q.purulhana)/qpurulhanaarbol.webp",
                "../images/cuidadoPaisajeAV/encinopirulento(q.purulhana)/qpurulhanahoja.webp",
                "../images/cuidadoPaisajeAV/encinopirulento(q.purulhana)/qpurulhanacono.webp",
                "../images/cuidadoPaisajeAV/encinopirulento(q.purulhana)/qpurulhanatronco.webp",
                "../images/cuidadoPaisajeAV/encinopirulento(q.purulhana)/mini_purulhana.webp"
            ]
        },
        "quercus-rugosa": {
            nombreCientifico: "Quercus rugosa",
            nombreComun:      "Encino",
            endemico:         "Nativa de México",
            descripcion:      "Ampliamente distribuido en bosques templados de montaña. Se distingue por sus hojas gruesas y de textura rugosa.",
            caracteristicas: [
                "Rasgo morfológico distintivo.",
                "Importancia ecológica.",
                "Especie clave del ecosistema."
            ],
            ejemplaresUAM: "1 Ejemplar en la UAM-A",
            fotos: [
                "../images/cuidadoPaisajeAV/encinopirulento(q.rugosa)/qrugosaarbol.webp",
                "../images/cuidadoPaisajeAV/encinopirulento(q.rugosa)/qrugosahoja.webp",
                "../images/cuidadoPaisajeAV/encinopirulento(q.rugosa)/qrugosatronco.webp",
                "../images/cuidadoPaisajeAV/encinopirulento(q.rugosa)/mini_rugosa.webp"
            ]
        },
        "araucaria-heterophylla": {
            nombreCientifico: "Araucaria",
            nombreComun:      "Araucaria",
            endemico:         "Exótica",
            descripcion:      "Se distingue por su porte recto y estructura perfectamente simétrica, con ramas dispuestas en niveles horizontales, lo que la convierte en un árbol muy apreciado en jardinería y paisajismo.",
            caracteristicas: [
                "Alto valor ornamental.",
                "Linaje evolutivo antiguo.",
                "Arquitectura muy distintiva."
            ],
            ejemplaresUAM: "7 Ejemplares en la UAM-A",
            fotos: [
                "../images/cuidadoPaisajeAV/araucaria/araucariaarbol.webp",
                "../images/cuidadoPaisajeAV/araucaria/araucariahoja.webp",
                "../images/cuidadoPaisajeAV/araucaria/araucariatronco.webp",
                "../images/cuidadoPaisajeAV/araucaria/araucariacono.webp",
                "../images/cuidadoPaisajeAV/araucaria/mini_araucaria.webp"
            ]
        },
        "ipomoea-murucoides": {
            nombreCientifico: "Ipomoea murucoides",
            nombreComun:      "Cazahuate",
            endemico:         "Nativa de México",
            descripcion:      "Se distingue por su floración abundante de flores blancas en forma de campana, que suele ocurrir cuando el árbol ha perdido sus hojas, generando un fuerte impacto visual en el paisaje.",
            caracteristicas: [
                "Floración muy llamativa.",
                "Adaptación a condiciones secas.",
                "Importancia para polinizadores."
            ],
            ejemplaresUAM: "12 Ejemplares en la UAM-A",
            fotos: [
                "../images/cuidadoPaisajeAV/cazahuate/cazahuatearbol.webp",
                "../images/cuidadoPaisajeAV/cazahuate/cazahuateflor.webp",
                "../images/cuidadoPaisajeAV/cazahuate/cazahuatefruto.webp",
                "../images/cuidadoPaisajeAV/cazahuate/cazahuatehoja.webp",
                "../images/cuidadoPaisajeAV/cazahuate/cazahuatetronco.webp",
                "../images/cuidadoPaisajeAV/cazahuate/mini_cazahuate.webp"
            ]
        },
        "schinus-molle": {
            nombreCientifico: "Schinus molle",
            nombreComun:      "Pirul",
            endemico:         "Exótica",
            descripcion:      "Se caracteriza por su copa amplia con ramas colgantes y follaje fino, así como por sus pequeños frutos rosados, que le dan un aspecto muy distintivo en el paisaje",
            caracteristicas: [
                "Arquitectura característica.",
                "Alta adaptación ambiental.",
                "Frutos distintivos."
            ],
            ejemplaresUAM: "14 Ejemplares en la UAM-A",
            fotos: [
                "../images/cuidadoPaisajeAV/pirul/pirularbol.webp",
                "../images/cuidadoPaisajeAV/pirul/pirulflor.webp",
                "../images/cuidadoPaisajeAV/pirul/pirulfruto.webp",
                "../images/cuidadoPaisajeAV/pirul/pirulhoja.webp",
                "../images/cuidadoPaisajeAV/pirul/pirultronco.webp",
                "../images/cuidadoPaisajeAV/pirul/mini_pirul.webp"
            ]
        }
    };
 
    const INTERVALO_GALERIA = 15000;
 
    function crearOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'ficha__overlay';
        overlay.id = 'fichaOverlay';
        overlay.innerHTML = `
            <div class="ficha__modal" id="fichaModal">
                <button class="ficha__cerrar" id="fichaCerrar" aria-label="Cerrar"></button>
                <div class="ficha__header">
                    <span class="ficha__aviso"></span>
                    <span class="ficha__tag" id="fichaEndemico"></span>
                </div>
                <div class="ficha__cuerpo">
                    <div class="ficha__galeria" id="fichaGaleria">
                        <div class="ficha__galeria-progreso" id="fichaProgreso"></div>
                        <div class="ficha__galeria-dots" id="fichaDots"></div>
                        <div class="ficha__galeria-label">
                            <span style="color:var(--rojoIconos);font-size:1.2em;"></span>
                            <span></span>
                        </div>
                    </div>
                    <div class="ficha__info">
                        <span class="ficha__nombre-cientifico" id="fichaNombreCientifico"></span>
                        <span class="ficha__nombre-comun"      id="fichaNombreComun"></span>
                        <p class="ficha__descripcion"          id="fichaDescripcion"></p>
                        <ul class="ficha__caracteristicas"     id="fichaCaracteristicas"></ul>
                        <div class="ficha__footer"             id="fichaEjemplares"></div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        return overlay;
    }
 
    let galeriaRaf    = null;
    let galeriaInicio = null;
    let galeriaActual = 0;
 
    function galeriaIrA(index) {
        const fotos = document.querySelectorAll('.ficha__foto');
        const dots  = document.querySelectorAll('#fichaDots .ficha__galeria-dot');
        fotos[galeriaActual]?.classList.remove('activo');
        dots[galeriaActual]?.classList.remove('activo');
        galeriaActual = ((index % fotos.length) + fotos.length) % fotos.length;
        fotos[galeriaActual]?.classList.add('activo');
        dots[galeriaActual]?.classList.add('activo');
    }
 
    function galeriaAnimarBarra(offsetMs = 0) {
        cancelAnimationFrame(galeriaRaf);
        const barra = document.getElementById('fichaProgreso');
        if (!barra) return;
        if (document.querySelectorAll('.ficha__foto').length <= 1) return;
 
        galeriaInicio = performance.now() - offsetMs;
 
        function paso(ahora) {
            const pct = Math.min(((ahora - galeriaInicio) / INTERVALO_GALERIA) * 100, 100);
            barra.style.width = pct + '%';
            if (pct < 100) {
                galeriaRaf = requestAnimationFrame(paso);
            } else {
                galeriaIrA(galeriaActual + 1);
                galeriaAnimarBarra();
            }
        }
        galeriaRaf = requestAnimationFrame(paso);
    }
 
    function galeriaDetener() {
        cancelAnimationFrame(galeriaRaf);
        const barra = document.getElementById('fichaProgreso');
        if (barra) barra.style.width = '0%';
    }
 
    function abrirFicha(clave) {
        const data = ESPECIES[clave];
        if (!data) return;
 
        galeriaDetener();
        galeriaActual = 0;
 
        document.getElementById('fichaEndemico').textContent        = data.endemico || '';
        document.getElementById('fichaNombreCientifico').textContent = data.nombreCientifico;
        document.getElementById('fichaNombreComun').textContent      = data.nombreComun;
        document.getElementById('fichaDescripcion').textContent      = data.descripcion;
        document.getElementById('fichaEjemplares').textContent       = data.ejemplaresUAM;
 
        const lista = document.getElementById('fichaCaracteristicas');
        lista.innerHTML = data.caracteristicas.map(c => `<li>${c}</li>`).join('');
 
        const contenedor = document.getElementById('fichaGaleria');
        contenedor.querySelectorAll('.ficha__foto').forEach(f => f.remove());
 
        data.fotos.forEach((src, i) => {
            const div = document.createElement('div');
            div.className = 'ficha__foto' + (i === 0 ? ' activo' : '');
            div.innerHTML = `<img src="${src}" alt="${data.nombreCientifico}">`;
            contenedor.insertBefore(div, contenedor.querySelector('.ficha__galeria-progreso'));
        });
 
        const dotsContenedor = document.getElementById('fichaDots');
        dotsContenedor.innerHTML = data.fotos.map((_, i) =>
            `<button class="ficha__galeria-dot${i === 0 ? ' activo' : ''}" data-gindex="${i}" aria-label="Foto ${i + 1}"></button>`
        ).join('');
 
        dotsContenedor.querySelectorAll('.ficha__galeria-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                galeriaDetener();
                galeriaIrA(parseInt(dot.dataset.gindex));
                galeriaAnimarBarra();
            });
        });
 
        const galeria = document.getElementById('fichaGaleria');
        galeria.onmouseenter = () => cancelAnimationFrame(galeriaRaf);
        galeria.onmouseleave = () => {
            const barra  = document.getElementById('fichaProgreso');
            const offset = (parseFloat(barra?.style.width || '0') / 100) * INTERVALO_GALERIA;
            galeriaAnimarBarra(offset);
        };
 
        document.getElementById('fichaOverlay').classList.add('activo');
        document.body.style.overflow = 'hidden';
        galeriaAnimarBarra();
    }
 
    function cerrarFicha() {
        galeriaDetener();
        document.getElementById('fichaOverlay').classList.remove('activo');
        document.body.style.overflow = '';
    }
 
    document.addEventListener('DOMContentLoaded', function () {
        const overlay = crearOverlay();
 
        document.getElementById('fichaCerrar').addEventListener('click', cerrarFicha);
        overlay.addEventListener('click', e => { if (e.target === overlay) cerrarFicha(); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrarFicha(); });
 
        document.querySelector('.arboles__viewport')?.addEventListener('click', function (e) {
            const tarjeta = e.target.closest('.tarjeta[data-especie]');
            if (!tarjeta) return;
            e.preventDefault();
            abrirFicha(tarjeta.dataset.especie);
        });
        
        /* ── Tarjetas responsivas (móvil y tablet) — estas no se clonan ── */
        document.querySelectorAll('.TarjetaPortal[data-especie], .TarjetaProc[data-especie]').forEach(tarjeta => {
            tarjeta.addEventListener('click', e => {
                e.preventDefault();
                abrirFicha(tarjeta.dataset.especie);
            });
        });

        // ── Tarjetas responsivas (AÑADIR AQUÍ) ──
        document.querySelectorAll('.TarjetaPortal[data-especie], .TarjetaProc[data-especie]').forEach(tarjeta => {
            tarjeta.addEventListener('click', e => {
                e.preventDefault();
                abrirFicha(tarjeta.dataset.especie);
            });
        });
 
        iniciarCarruselFlechas();
    });
 
    function iniciarCarruselFlechas() {
        const contenedor = document.querySelector('.carrusel-contenedor');
        const btnPrev    = document.querySelector('.arboles__btn--prev');
        const btnNext    = document.querySelector('.arboles__btn--next');
        if (!contenedor || !btnPrev || !btnNext) return;
 
        contenedor.style.animation = 'none';
        contenedor.style.transform = 'translateX(0)';
 
        let posicion = 0;
 
        function tarjetaAncho() {
            const t = contenedor.querySelector('.tarjeta');
            if (!t) return 300;
            const gap = parseFloat(getComputedStyle(contenedor).gap) || 20;
            return t.offsetWidth + gap;
        }
 
        function maxDesplazamiento() {
            return Math.max(0, contenedor.scrollWidth - contenedor.parentElement.offsetWidth);
        }
 
        function mover(delta) {
            posicion = Math.min(Math.max(posicion + delta, 0), maxDesplazamiento());
            contenedor.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            contenedor.style.transform  = `translateX(-${posicion}px)`;
            actualizarBotones();
        }
 
        function actualizarBotones() {
            btnPrev.style.opacity = posicion <= 0                          ? '0.35' : '1';
            btnNext.style.opacity = posicion >= maxDesplazamiento()        ? '0.35' : '1';
        }
 
        btnNext.addEventListener('click', () => mover(tarjetaAncho()));
        btnPrev.addEventListener('click', () => mover(-tarjetaAncho()));
 
        let touchStartX = null;
        contenedor.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
        contenedor.addEventListener('touchend',   e => {
            if (touchStartX === null) return;
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) mover(diff > 0 ? tarjetaAncho() : -tarjetaAncho());
            touchStartX = null;
        });
 
        let wheelTimer = null;
        contenedor.parentElement.addEventListener('wheel', e => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY) * 0.5) {
                e.preventDefault();
                clearTimeout(wheelTimer);
                wheelTimer = setTimeout(() => {
                    if (e.deltaX > 30)  mover(tarjetaAncho());
                    if (e.deltaX < -30) mover(-tarjetaAncho());
                }, 80);
            }
        }, { passive: false });
 
        actualizarBotones();
        window.addEventListener('resize', actualizarBotones);
    }
 
})();

// ── Contadores sección Sabías Qué ──────────────────────────────
const datosNumericos = [
    { selector: '.sabiasQue .dato:nth-child(1) .dato__numero', final: 321 },
    { selector: '.sabiasQue .dato:nth-child(2) .dato__numero', final: 27  },
    { selector: '.sabiasQue .dato:nth-child(3) .dato__numero', final: 91  },
    { selector: '.sabiasQue .dato:nth-child(4) .dato__numero', final: 28  },
    { selector: '.sabiasQue .dato:nth-child(5) .dato__numero', final: 200 },
    { selector: '.sabiasQue .dato:nth-child(6) .dato__numero', final: 545 },
];

datosNumericos.forEach(({ selector, final }) => {
    const el = document.querySelector(selector);
    if (!el) return;

    let animado = false;

    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animado) {
                animado = true;
                let inicio = null;
                const duracion = 1200;

                function paso(timestamp) {
                    if (!inicio) inicio = timestamp;
                    const progreso = timestamp - inicio;
                    const valor = Math.min(Math.round((progreso / duracion) * final), final);
                    el.textContent = valor;
                    if (valor < final) requestAnimationFrame(paso);
                }
                requestAnimationFrame(paso);
                obs.disconnect(); // una sola vez
            }
        });
    }, { threshold: 0.2 });

    obs.observe(el);
});

document.addEventListener("DOMContentLoaded", () => {
  
  function initCarrusel(contenedorSelector, tarjetaSelector, prevSelector, nextSelector) {
    const tarjetas = document.querySelectorAll(`${contenedorSelector} ${tarjetaSelector}`);
    const prevBtn = document.querySelector(prevSelector);
    const nextBtn = document.querySelector(nextSelector);
    let currentIndex = 0;

    function mostrarTarjeta(index) {
      tarjetas.forEach((tarjeta, i) => {
        tarjeta.classList.toggle('activa', i === index);
      });
    }

    
    mostrarTarjeta(currentIndex);

    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % tarjetas.length;
        mostrarTarjeta(currentIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + tarjetas.length) % tarjetas.length;
        mostrarTarjeta(currentIndex);
      });
    }
  }

  
  initCarrusel('.portal_contenedor', '.TarjetaPortal', '.portal-nav.prev', '.portal-nav.next');

  
  initCarrusel('.procedimiento_contenedor', '.TarjetaProc', '.proc-nav.prev', '.proc-nav.next');
});

document.addEventListener("DOMContentLoaded", () => {

  // ── Carrusel PORTAL (siempre 1 tarjeta) ──────────────────────────
  function initCarrusel(contenedorSelector, tarjetaSelector, prevSelector, nextSelector) {
    const tarjetas = document.querySelectorAll(`${contenedorSelector} ${tarjetaSelector}`);
    const prevBtn = document.querySelector(prevSelector);
    const nextBtn = document.querySelector(nextSelector);
    let currentIndex = 0;

    function mostrarTarjeta(index) {
      tarjetas.forEach((tarjeta, i) => {
        tarjeta.classList.toggle('activa', i === index);
      });
    }

    mostrarTarjeta(currentIndex);

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % tarjetas.length;
        mostrarTarjeta(currentIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + tarjetas.length) % tarjetas.length;
        mostrarTarjeta(currentIndex);
      });
    }
  }

  initCarrusel('.portal_contenedor', '.TarjetaPortal', '.portal-nav.prev', '.portal-nav.next');

  // ── Carrusel PROCEDIMIENTO ────────────────────────────────────────
  const tarjetas = document.querySelectorAll('.procedimiento_contenedor .TarjetaProc');
  const prevBtn  = document.querySelector('.proc-nav.prev');
  const nextBtn  = document.querySelector('.proc-nav.next');
  let currentIndex = 0;

  function mostrarTarjetasProc(index) {
    const esTablet = window.innerWidth >= 650 && window.innerWidth <= 1049;

    tarjetas.forEach(t => t.classList.remove('activa'));

    if (esTablet) {
      // Muestra 2 tarjetas a la vez
      tarjetas[index].classList.add('activa');
      const segunda = (index + 1) % tarjetas.length;
      tarjetas[segunda].classList.add('activa');
    } else {
      // Celular: 1 tarjeta
      tarjetas[index].classList.add('activa');
    }
  }

  mostrarTarjetasProc(currentIndex);

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const esTablet = window.innerWidth >= 650 && window.innerWidth <= 1049;
      if (esTablet) {
        // Avanza de 2 en 2; los pares posibles son 0→2, 2→0 (para 4 tarjetas)
        currentIndex = (currentIndex + 2) % tarjetas.length;
      } else {
        currentIndex = (currentIndex + 1) % tarjetas.length;
      }
      mostrarTarjetasProc(currentIndex);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const esTablet = window.innerWidth >= 650 && window.innerWidth <= 1049;
      if (esTablet) {
        currentIndex = (currentIndex - 2 + tarjetas.length) % tarjetas.length;
      } else {
        currentIndex = (currentIndex - 1 + tarjetas.length) % tarjetas.length;
      }
      mostrarTarjetasProc(currentIndex);
    });
  }

  window.addEventListener('resize', () => {
    mostrarTarjetasProc(currentIndex);
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.querySelector('.carrusel-contenedor');
    
    if (!carrusel) return;

    let currentX = 0;
    let isPaused = false;
    let isDragging = false;
    let startX;
    let scrollLeft;
    let velocity = 0.8; 

    // 1. CLONACIÓN PARA INFINITO
    const contenidoOriginal = carrusel.innerHTML;
    carrusel.innerHTML += contenidoOriginal; 
    const halfWidth = () => carrusel.scrollWidth / 2;

    // 2. ANIMACIÓN AUTOMÁTICA
    function animate() {
        if (!isPaused && !isDragging) {
            currentX += velocity;
            if (currentX >= halfWidth()) currentX = 0;
            carrusel.style.transform = `translateX(-${currentX}px)`;
        }
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    // 3. LÓGICA DE ARRASTRE (DRAG)
    const startDrag = (e) => {
        isDragging = true;
        isPaused = true;
        // Detectar si es touch o mouse
        startX = (e.pageX || e.touches[0].pageX);
        scrollLeft = currentX;
        carrusel.style.transition = "none"; // Elimina delay para que el drag sea instantáneo
    };

    const moveDrag = (e) => {
        if (!isDragging) return;
        
        // Prevenir comportamientos por defecto (como scroll de página o arrastre de imagen)
        e.preventDefault(); 
        
        const x = (e.pageX || e.touches[0].pageX);
        const walk = (startX - x) * 1.5; // El 1.5 es la velocidad de respuesta al mover el mouse
        currentX = scrollLeft + walk;

        // Loop infinito durante el arrastre
        if (currentX < 0) currentX = halfWidth() + currentX;
        if (currentX >= halfWidth()) currentX = currentX - halfWidth();

        carrusel.style.transform = `translateX(-${currentX}px)`;
    };

    const stopDrag = () => {
        isDragging = false;
        isPaused = false;
    };

    // Eventos de Mouse
    carrusel.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', moveDrag);
    window.addEventListener('mouseup', stopDrag);

    // Eventos de Touch (Para celulares)
    carrusel.addEventListener('touchstart', startDrag);
    window.addEventListener('touchmove', moveDrag, { passive: false });
    window.addEventListener('touchend', stopDrag);

    // Pausa al poner el mouse encima (Hover)
    carrusel.addEventListener('mouseenter', () => isPaused = true);
    carrusel.addEventListener('mouseleave', () => {
        if (!isDragging) isPaused = false;
    });
});