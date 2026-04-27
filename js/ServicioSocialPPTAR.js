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

const track   = document.querySelector('.carrusel-track');
  const btnNext = document.querySelector('.next');
  const btnPrev = document.querySelector('.prev');
 
  function getScrollAmount() {
    const card = document.querySelector('.tarjeta-actividad');
    return card.offsetWidth + 40; // ancho tarjeta + gap
  }
 
  function isAtEnd() {
    return track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
  }
 
  function isAtStart() {
    return track.scrollLeft <= 2;
  }
 
  btnNext.addEventListener('click', () => {
    if (isAtEnd()) {
      // Está al final → ir al inicio
      track.scrollLeft = 0;
    } else {
      track.scrollLeft += getScrollAmount();
    }
  });
 
  btnPrev.addEventListener('click', () => {
    if (isAtStart()) {
      // Está al inicio → ir al final
      track.scrollLeft = track.scrollWidth;
    } else {
      track.scrollLeft -= getScrollAmount();
    }
  });


// 1. Clonación de tarjetas para efecto infinito
const cards = Array.from(track.children);
const cardWidthValue = () => document.querySelector('.tarjeta-actividad').offsetWidth + 40;

// Clonamos las 2 primeras y las 2 últimas
cards.slice(0, 2).forEach(card => track.appendChild(card.cloneNode(true)));
cards.slice(-2).reverse().forEach(card => track.insertBefore(card.cloneNode(true), track.firstChild));

// Posición inicial (saltando los clones del principio)
track.scrollLeft = cardWidthValue() * 2;

// Función de movimiento
function move(direction) {
    track.style.scrollBehavior = 'smooth';
    const scrollAmount = cardWidthValue();
    
    if (direction === 'next') {
        track.scrollLeft += scrollAmount;
    } else {
        track.scrollLeft -= scrollAmount;
    }
}

// Salto invisible para infinito
track.addEventListener('scroll', () => {
    const width = cardWidthValue();
    const maxScroll = track.scrollWidth - track.clientWidth;

    if (track.scrollLeft >= maxScroll - 5) {
        track.style.scrollBehavior = 'auto';
        track.scrollLeft = width * 2;
    } else if (track.scrollLeft <= 5) {
        track.style.scrollBehavior = 'auto';
        track.scrollLeft = maxScroll - (width * 2);
    }
});

btnNext.addEventListener('click', () => move('next'));
btnPrev.addEventListener('click', () => move('prev'));

document.querySelectorAll('.step-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Quitar estado activo de botones
        document.querySelectorAll('.step-btn').forEach(btn => btn.classList.remove('active'));
        // Quitar estado activo de contenidos
        document.querySelectorAll('.step-content').forEach(content => content.classList.remove('active'));

        // Activar el seleccionado
        button.classList.add('active');
        const stepNumber = button.getAttribute('data-step');
        document.getElementById(`content-${stepNumber}`).classList.add('active');
    });
});

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('modal-testimonio');
    const cerrarModalBtn = document.getElementById('cerrar-modal');
    
    const modalAnio = document.getElementById('modal-anio');
    const modalNombre = document.getElementById('modal-nombre');
    const modalTestimonioTexto = document.getElementById('modal-testimonio-texto');

    // Escucha el clic en cualquier botón con la clase 'btn-ver-mas'
    document.querySelectorAll('.btn-ver-mas').forEach(boton => {
        boton.addEventListener('click', () => {
            const anio = boton.dataset.anio;
            const nombre = boton.dataset.nombre;
            const testimonioCompleto = boton.dataset.testimonioCompleto;
            const foto = boton.dataset.foto;           // ← línea nueva

            modalAnio.textContent = anio;
            modalNombre.textContent = nombre;
            modalTestimonioTexto.textContent = testimonioCompleto;

            // Inyectar foto — si no hay src muestra el fondo gris del placeholder
            const modalFoto = document.getElementById('modal-foto');
            if (modalFoto) {
                modalFoto.src = foto || '';
                modalFoto.alt = nombre;
            }

            modal.classList.add('mostrar');
        });
    });

    // Cierra el modal al hacer clic en el botón de cerrar ('x')
    cerrarModalBtn.addEventListener('click', () => {
        modal.classList.remove('mostrar');
    });

    // Cierra el modal al hacer clic en cualquier lugar fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('mostrar');
        }
    });

    // Cierra el modal con la tecla Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('mostrar')) {
            modal.classList.remove('mostrar');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const imgPrincipal = document.querySelector('.imagenPrincipal img');
    if (!imgPrincipal) return;

    if (imgPrincipal.complete) {
        // Ya estaba en caché, mostrar de inmediato
        imgPrincipal.classList.add('cargada');
    } else {
        imgPrincipal.addEventListener('load', function () {
            imgPrincipal.classList.add('cargada');
        });
    }
});

// ===== PROCEDIMIENTO DE INSCRIPCIÓN — PTAR: Pasos interactivos =====
(function () {
  const btnsPaso   = document.querySelectorAll('.seccion-procedimiento .btn-paso');
  const panelsPaso = document.querySelectorAll('.seccion-procedimiento .paso-panel');
 
  btnsPaso.forEach(btn => {
    btn.addEventListener('click', () => {
      const paso = btn.dataset.paso;
 
      // Actualizar botones activos
      btnsPaso.forEach(b => b.classList.remove('activo'));
      btn.classList.add('activo');
 
      // Mostrar panel correspondiente
      panelsPaso.forEach(p => p.classList.remove('activo'));
      document.getElementById('paso-' + paso).classList.add('activo');
    });
  });
})();
 

document.addEventListener("DOMContentLoaded", () => {
 
  /* ── Función genérica reutilizable ── */
  function initCarrusel(contenedorSelector, tarjetaSelector, prevSelector, nextSelector, dotSelector) {
    const tarjetas = document.querySelectorAll(`${contenedorSelector} ${tarjetaSelector}`);
    const prevBtn  = document.querySelector(prevSelector);
    const nextBtn  = document.querySelector(nextSelector);
    const dots     = dotSelector ? document.querySelectorAll(dotSelector) : [];
    let currentIndex = 0;
 
    if (!tarjetas.length) return;   // sale si no hay tarjetas (seguridad)
 
    function mostrarTarjeta(index) {
      tarjetas.forEach((tarjeta, i) => {
        tarjeta.classList.toggle('activa', i === index);
      });
 
      // Actualiza dots si existen
      dots.forEach((dot, i) => {
        dot.classList.toggle('activo', i === index);
      });
    }
 
    // Estado inicial
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
 
    // Navegación con dots (clic directo)
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        currentIndex = i;
        mostrarTarjeta(currentIndex);
      });
    });
 
    // Soporte swipe táctil
    let touchStartX = 0;
    const track = document.querySelector(`${contenedorSelector}`);
    if (track) {
      track.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
      }, { passive: true });
 
      track.addEventListener('touchend', e => {
        const delta = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 40) {                       // umbral mínimo de 40px
          if (delta > 0) {
            currentIndex = (currentIndex + 1) % tarjetas.length;
          } else {
            currentIndex = (currentIndex - 1 + tarjetas.length) % tarjetas.length;
          }
          mostrarTarjeta(currentIndex);
        }
      }, { passive: true });
    }
  }
 
  /* ── Inicializar el carrusel de actividades (móvil/tablet) ── */
  initCarrusel(
    '.carrusel-movil',                    // contenedor
    '.tarjeta-actividad--movil',          // tarjetas
    '.actividades-nav.prev',              // botón anterior
    '.actividades-nav.next',              // botón siguiente
    '.carrusel-movil__dots .dot'          // dots indicadores
  );
 
  /* ── Aquí van los demás initCarrusel de otros módulos ── */
  // initCarrusel('.portal_contenedor',       '.TarjetaPortal', '.portal-nav.prev',   '.portal-nav.next');
  // initCarrusel('.procedimiento_contenedor','.TarjetaProc',   '.proc-nav.prev',     '.proc-nav.next');
 
});
 


 
document.addEventListener("DOMContentLoaded", () => {
 
  /* ── Función genérica reutilizable ──
     (Si ya está definida en el archivo principal,
     NO la dupliques; solo añade la llamada initCarrusel
     que aparece al final de este bloque.)
  ──────────────────────────────────────────────────── */
  function initCarrusel(contenedorSelector, tarjetaSelector, prevSelector, nextSelector, dotSelector) {
    const tarjetas = document.querySelectorAll(`${contenedorSelector} ${tarjetaSelector}`);
    const prevBtn  = document.querySelector(prevSelector);
    const nextBtn  = document.querySelector(nextSelector);
    const dots     = dotSelector ? document.querySelectorAll(dotSelector) : [];
    let currentIndex = 0;
 
    if (!tarjetas.length) return;
 
    function mostrarTarjeta(index) {
      tarjetas.forEach((t, i) => t.classList.toggle('activa', i === index));
      dots.forEach((d, i) => d.classList.toggle('activo', i === index));
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
 
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        currentIndex = i;
        mostrarTarjeta(currentIndex);
      });
    });
 
    // Soporte swipe táctil
    let touchStartX = 0;
    const track = document.querySelector(contenedorSelector);
    if (track) {
      track.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
      }, { passive: true });
 
      track.addEventListener('touchend', e => {
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
 
  /* ── Inicializar carrusel de TESTIMONIOS (móvil/tablet) ── */
  initCarrusel(
    '.testimonios-carrusel',              // contenedor
    '.tarjeta-testimonio--movil',         // tarjetas
    '.testimonios-nav.prev',              // botón anterior
    '.testimonios-nav.next',              // botón siguiente
    '.testimonios-carrusel__dots .dot-t'  // dots
  );
 
  /* ── Carrusel de ACTIVIDADES (ya existente, se deja como referencia) ── */
  // initCarrusel(
  //   '.carrusel-movil',
  //   '.tarjeta-actividad--movil',
  //   '.actividades-nav.prev',
  //   '.actividades-nav.next',
  //   '.carrusel-movil__dots .dot'
  // );
 
});
 
 
/* =====================================================
   MODAL — asegura que data-carrera se muestre
   correctamente en la versión responsiva.
 
   Si el JS del modal ya existe en tu archivo principal,
   SOLO añade las líneas marcadas con "← AÑADIR"
   al bloque del evento 'click' de .btn-ver-mas.
   ===================================================== */
 
// Versión completa del modal (reemplaza la que ya tienes):
document.addEventListener('DOMContentLoaded', () => {
 
  const modal              = document.getElementById('modal-testimonio');
  const cerrarModalBtn     = document.getElementById('cerrar-modal');
  const modalAnio          = document.getElementById('modal-anio');
  const modalNombre        = document.getElementById('modal-nombre');
  const modalTexto         = document.getElementById('modal-testimonio-texto');
 
  document.querySelectorAll('.btn-ver-mas').forEach(boton => {
    boton.addEventListener('click', () => {
 
      // Datos básicos
      modalAnio.textContent   = boton.dataset.anio   || '';
      modalNombre.textContent = boton.dataset.nombre  || '';
      modalTexto.textContent  = boton.dataset.testimonioCompleto || '';
 
      // Foto
      const modalFoto = document.getElementById('modal-foto');
      if (modalFoto) {
        modalFoto.src = boton.dataset.foto || '';
        modalFoto.alt = boton.dataset.nombre || '';
      }
 
      // Carrera  ← AÑADIR (si el elemento existe en el HTML del modal)
      const modalCarrera = document.getElementById('modal-carrera');
      if (modalCarrera) {
        modalCarrera.textContent = boton.dataset.carrera || '';
      }
 
      modal.classList.add('mostrar');
    });
  });
 
  // Cerrar con botón ×
  cerrarModalBtn?.addEventListener('click', () => modal.classList.remove('mostrar'));
 
  // Cerrar al hacer clic fuera del contenido
  window.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('mostrar');
  });
 
  // Cerrar con Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('mostrar')) {
      modal.classList.remove('mostrar');
    }
  });
});
 