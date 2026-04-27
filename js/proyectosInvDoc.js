document.addEventListener("DOMContentLoaded", () => {
 
  /* ──────────────────────────────────────────
     1. PAGINACIÓN ESCRITORIO (lógica original)
  ────────────────────────────────────────── */
  const paneles = document.querySelectorAll('.proyectos__panel');
  const botones = document.querySelectorAll('.proyectos__pagina-btn');
 
  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      const pagina = btn.dataset.pagina;
 
      paneles.forEach(p => p.classList.remove('activo'));
      document.querySelector(`.proyectos__panel[data-panel="${pagina}"]`)
              .classList.add('activo');
 
      botones.forEach(b => b.classList.remove('activo'));
      btn.classList.add('activo');
    });
  });
 
 
  /* ──────────────────────────────────────────
     2. CARRUSEL MÓVIL / TABLET
     Clona las tarjetas de los paneles al
     contenedor de carrusel.
  ────────────────────────────────────────── */
  const carrusel = document.getElementById('proyectosCarruselMovil');
  const btnPrev  = document.getElementById('proyectosPrev');
  const btnNext  = document.getElementById('proyectosNext');
  const contador = document.getElementById('proyectosContador');
 
  if (!carrusel) return;
 
  /* Clonar tarjetas al carrusel */
  document.querySelectorAll('.proyectos__panel .tarjeta-proyecto')
    .forEach(t => carrusel.appendChild(t.cloneNode(true)));
 
  const tarjetas = carrusel.querySelectorAll('.tarjeta-proyecto');
  const total    = tarjetas.length;
  let   indice   = 0;
 
  /* Cuántas tarjetas mostrar a la vez */
  function paso() {
    return window.innerWidth >= 650 ? 2 : 1;
  }
 
  /* Mostrar tarjetas y actualizar contador */
  function mostrar(idx) {
    const p    = paso();
    const max  = Math.max(0, total - p);
    indice     = Math.min(Math.max(idx, 0), max);
 
    tarjetas.forEach((t, i) => {
      t.classList.toggle('activa', i >= indice && i < indice + p);
    });
 
    /* Contador: "X / Y" en móvil, "X–Y / total" en tablet */
    if (p === 2) {
      const hasta = Math.min(indice + p, total);
      contador.textContent = `${indice + 1}${hasta > indice + 1 ? `–${hasta}` : ''} / ${total}`;
    } else {
      contador.textContent = `${indice + 1} / ${total}`;
    }
 
    btnPrev.disabled = indice === 0;
    btnNext.disabled = indice + p >= total;
  }
 
  /* Flechas */
  btnPrev.addEventListener('click', () => mostrar(indice - paso()));
  btnNext.addEventListener('click', () => mostrar(indice + paso()));
 
  /* Swipe táctil */
  let startX = 0;
  carrusel.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  carrusel.addEventListener('touchend',   e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) mostrar(diff > 0 ? indice + paso() : indice - paso());
  }, { passive: true });
 
  /* Recalcular al redimensionar */
  window.addEventListener('resize', () => mostrar(0));
 
  /* Arranque */
  mostrar(0);
 
});
/* =====================================================
   SECCIÓN REPORTAJES — JavaScript
   Pegar dentro del DOMContentLoaded existente
   (o al final del archivo JS principal del proyecto)
   ===================================================== */
 
document.addEventListener("DOMContentLoaded", () => {
 
  /* ════════════════════════════════════════════════════
     1. CARRUSEL ESCRITORIO — scroll horizontal con
        botones prev / next. Muestra 3 tarjetas a la vez.
     ════════════════════════════════════════════════════ */
  const trackDesk  = document.querySelector('.reportajes-track');
  const btnPrevD   = document.querySelector('.prev-desk');
  const btnNextD   = document.querySelector('.next-desk');
 
  if (trackDesk && btnPrevD && btnNextD) {
 
    function getScrollAmountReportajes() {
      const card = trackDesk.querySelector('.tarjeta-reportaje');
      return card ? card.offsetWidth + 24 : 320;  // ancho tarjeta + gap
    }
 
    btnNextD.addEventListener('click', () => {
      const atEnd = trackDesk.scrollLeft + trackDesk.clientWidth >= trackDesk.scrollWidth - 4;
      trackDesk.scrollLeft = atEnd ? 0 : trackDesk.scrollLeft + getScrollAmountReportajes();
    });
 
    btnPrevD.addEventListener('click', () => {
      const atStart = trackDesk.scrollLeft <= 4;
      trackDesk.scrollLeft = atStart
        ? trackDesk.scrollWidth
        : trackDesk.scrollLeft - getScrollAmountReportajes();
    });
  }
 
 
  /* ════════════════════════════════════════════════════
     2. CARRUSEL MÓVIL/TABLET — función genérica
        initCarrusel reutilizable (con dots y swipe táctil)
     ════════════════════════════════════════════════════ */
  function initCarrusel(contenedorSelector, tarjetaSelector, prevSelector, nextSelector, dotSelector) {
    const tarjetas = document.querySelectorAll(`${contenedorSelector} ${tarjetaSelector}`);
    const prevBtn  = document.querySelector(prevSelector);
    const nextBtn  = document.querySelector(nextSelector);
    const dots     = dotSelector ? document.querySelectorAll(dotSelector) : [];
    let currentIndex = 0;
 
    if (!tarjetas.length) return;
 
    function mostrarTarjeta(index) {
      tarjetas.forEach((t, i) => t.classList.toggle('activa', i === index));
      dots.forEach((d, i)     => d.classList.toggle('activo',  i === index));
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
 
    // Clic directo en dots
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        currentIndex = i;
        mostrarTarjeta(currentIndex);
      });
    });
 
    // Soporte swipe táctil
    let touchStartX = 0;
    const contenedor = document.querySelector(contenedorSelector);
    if (contenedor) {
      contenedor.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
      }, { passive: true });
 
      contenedor.addEventListener('touchend', e => {
        const delta = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 40) {
          currentIndex = delta > 0
            ? (currentIndex + 1) % tarjetas.length
            : (currentIndex - 1 + tarjetas.length) % tarjetas.length;
          mostrarTarjeta(currentIndex);
        }
      }, { passive: true });
    }
  }
 
  /* ── Inicializar carrusel de REPORTAJES (móvil/tablet) ── */
  initCarrusel(
    '.reportajes-movil',                   // contenedor
    '.tarjeta-reportaje--movil',           // tarjetas
    '.reportajes-nav.prev',                // botón anterior
    '.reportajes-nav.next',                // botón siguiente
    '.reportajes-movil__dots .dot-r'       // dots
  );
 
  /* ── Otros carruseles del proyecto (referencia) ── */
  // initCarrusel('.carrusel-movil',         '.tarjeta-actividad--movil', '.actividades-nav.prev',  '.actividades-nav.next',  '.carrusel-movil__dots .dot');
  // initCarrusel('.testimonios-carrusel',   '.tarjeta-testimonio--movil','.testimonios-nav.prev',  '.testimonios-nav.next',  '.testimonios-carrusel__dots .dot-t');
 
});