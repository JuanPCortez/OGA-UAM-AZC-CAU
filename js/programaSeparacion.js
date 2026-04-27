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
document.querySelectorAll('.lineaTiempo__anio').forEach(anio => {
    anio.addEventListener('click', () => {
        const item = anio.closest('.lineaTiempo__item, [class*="lineaTiempo__item--"]');
        const desc = item.querySelector('.lineaTiempo__descripcion');
        const conector = item.querySelector('.lineaTiempo__conector');
        const yaEstabaAbierto = desc.classList.contains('lineaTiempo__descripcion--visible');

        // Cierra todos
        document.querySelectorAll('.lineaTiempo__descripcion').forEach(d =>
            d.classList.remove('lineaTiempo__descripcion--visible'));
        document.querySelectorAll('.lineaTiempo__conector').forEach(c =>
            c.classList.remove('lineaTiempo__conector--visible'));
        document.querySelectorAll('.lineaTiempo__anio').forEach(a =>
            a.classList.remove('lineaTiempo__anio--activo'));

        // Abre el seleccionado (solo si estaba cerrado)
        if (!yaEstabaAbierto) {
            desc.classList.add('lineaTiempo__descripcion--visible');
            conector.classList.add('lineaTiempo__conector--visible');
            anio.classList.add('lineaTiempo__anio--activo');
        }
    });
});

