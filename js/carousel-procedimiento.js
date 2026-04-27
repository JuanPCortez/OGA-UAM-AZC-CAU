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
