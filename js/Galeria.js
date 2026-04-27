document.addEventListener('DOMContentLoaded', () => {
    const meses = document.querySelectorAll('.ListaMeses p');
    const secciones = document.querySelectorAll('.CarruselCalendarioA > div');
    meses.forEach(mes => {
      mes.addEventListener('click', () => {
        const idMes = mes.id;
        meses.forEach(m => m.classList.remove('activo'));
        mes.classList.add('activo');
        secciones.forEach(sec => sec.style.display = 'none');
        const divMostrar = document.querySelector('.Fechas' + idMes);
        if (divMostrar) divMostrar.style.display = 'block';
      });
    });
    const enero = document.getElementById('Enero');
    if (enero) enero.classList.add('activo');
});
 
document.addEventListener('DOMContentLoaded', () => {
  const meses2 = document.querySelectorAll('.listaMesesTablet p');
  const secciones2 = document.querySelectorAll('.CarruselCalendarioA > div');
  meses2.forEach(mes2 => {
    mes2.addEventListener('click', () => {
      const idMes = mes2.id;
      meses2.forEach(m2 => m2.classList.remove('activo'));
      mes2.classList.add('activo');
      secciones2.forEach(sec2 => sec2.style.display = 'none');
      const divMostrar2 = document.querySelector('.Fechas' + idMes);
      if (divMostrar2) divMostrar2.style.display = 'block';
    });
  });
  const enero = document.getElementById('Enero');
  if (enero) enero.classList.add('activo');
});
 
document.addEventListener('DOMContentLoaded', () => {
  const meses3 = document.querySelectorAll('.ContenedorOpciones div');
  const secciones3 = document.querySelectorAll('.CarruselCalendarioA > div');
  meses3.forEach(mes3 => {
    mes3.addEventListener('click', () => {
      const idMes = mes3.id;
      meses3.forEach(m3 => m3.classList.remove('activo'));
      mes3.classList.add('activo');
      secciones3.forEach(sec3 => sec3.style.display = 'none');
      const divMostrar3 = document.querySelector('.Fechas' + idMes);
      if (divMostrar3) divMostrar3.style.display = 'block';
    });
  });
  const enero = document.getElementById('Enero');
  if (enero) enero.classList.add('activo');
});
 
const select = document.querySelector('.ListamesesSelect');
const selected = select.querySelector('.MesSeleccionado');
const options = select.querySelectorAll('.option');
selected.addEventListener('click', () => { select.classList.toggle('open'); });
options.forEach(option => {
  option.addEventListener('click', (e) => {
    selected.textContent = e.target.textContent;
    options.forEach(o => o.classList.remove('active'));
    e.target.classList.add('active');
    select.classList.remove('open');
  });
});
 
/* ══════════════════════════════════════════════════
   LIGHTBOX sincronizado con Swiper
══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
 
    const overlay = document.createElement('div');
    overlay.id = 'lb-overlay';
    overlay.innerHTML = `
        <button class="lb-flecha lb-prev" aria-label="Anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                 stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"/>
            </svg>
        </button>
        <div class="lb-contenido">
            <img id="lb-img" src="" alt="">
            <p id="lb-label"></p>
        </div>
        <button class="lb-flecha lb-next" aria-label="Siguiente">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                 stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"/>
            </svg>
        </button>`;
    document.body.appendChild(overlay);
 
    const lbImg   = document.getElementById('lb-img');
    const lbLabel = document.getElementById('lb-label');
    const lbPrev  = overlay.querySelector('.lb-prev');
    const lbNext  = overlay.querySelector('.lb-next');
 
    let slides = [], currentIndex = 0, swiperActivo = null;
 
    function getContextoActivo() {
        const mesVisible = document.querySelector('.CarruselCalendarioA > div[style*="block"]')
                        || document.querySelector('.CarruselCalendarioA > div');
        if (!mesVisible) return { slides: [], swiper: null };
        const swiperEl = mesVisible.querySelector('.swiper');
        const swiper   = (swiperEl && window.swipers)
            ? window.swipers.find(s => s.el === swiperEl)
            : null;
        return { slides: Array.from(mesVisible.querySelectorAll('.swiper-slide')), swiper };
    }
 
    function mostrar(index) {
        if (!slides.length) return;
        currentIndex = (index + slides.length) % slides.length;
        const img = slides[currentIndex].querySelector('.product-img img');
        lbImg.src = img ? img.src : '';
        lbLabel.textContent = img ? (img.alt || '') : '';
        if (swiperActivo) swiperActivo.slideTo(currentIndex, 300);
        lbPrev.style.opacity = lbNext.style.opacity = slides.length > 1 ? '1' : '0.3';
    }
 
    function abrirLightbox(slideEl) {
        const ctx = getContextoActivo();
        slides = ctx.slides;
        swiperActivo = ctx.swiper;
        currentIndex = slides.indexOf(slideEl);
        if (currentIndex === -1) currentIndex = 0;
        mostrar(currentIndex);
        overlay.classList.add('activo');
        document.body.style.overflow = 'hidden';
    }
 
    function cerrarLightbox() {
        overlay.classList.remove('activo');
        document.body.style.overflow = '';
    }
 
    lbPrev.addEventListener('click', e => { e.stopPropagation(); mostrar(currentIndex - 1); });
    lbNext.addEventListener('click', e => { e.stopPropagation(); mostrar(currentIndex + 1); });
 
    overlay.addEventListener('click', e => {
        if (!e.target.closest('.lb-contenido') && !e.target.closest('.lb-flecha')) cerrarLightbox();
    });
 
    document.addEventListener('keydown', e => {
        if (!overlay.classList.contains('activo')) return;
        if (e.key === 'Escape')     cerrarLightbox();
        if (e.key === 'ArrowLeft')  mostrar(currentIndex - 1);
        if (e.key === 'ArrowRight') mostrar(currentIndex + 1);
    });
 
    let touchStartX = null;
    overlay.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
    overlay.addEventListener('touchend',   e => {
        if (touchStartX === null) return;
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) mostrar(currentIndex + (diff > 0 ? 1 : -1));
        touchStartX = null;
    });
 
    document.querySelector('.CarruselCalendarioA').addEventListener('click', e => {
        const img = e.target.closest('.product-img img');
        if (!img) return;
        const slideEl = img.closest('.swiper-slide');
        if (slideEl) abrirLightbox(slideEl);
    });
 
    document.querySelector('.CarruselCalendarioA').addEventListener('mouseover', e => {
        if (e.target.closest('.product-img img')) e.target.style.cursor = 'zoom-in';
    });
});
 