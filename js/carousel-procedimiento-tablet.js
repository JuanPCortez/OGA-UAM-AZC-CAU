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