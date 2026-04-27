document.addEventListener("DOMContentLoaded", () => {

    // ── CARRUSEL PROCEDIMIENTO ──────────────────────────────
    const tarjetasProc = document.querySelectorAll('.TarjetaProc');
    const prevProc = document.querySelector('.proc-nav.prev');
    const nextProc = document.querySelector('.proc-nav.next');

    // Cuántas tarjetas mostrar según el ancho
    function tarjetasPorVista() {
        if (window.innerWidth <= 649) return 1;
        if (window.innerWidth <= 1049) return 2;
        return 4; // escritorio las muestra el CSS, no el JS
    }

    let indexProc = 0;

    function mostrarTarjetasProc() {
        const porVista = tarjetasPorVista();

        // En escritorio el CSS ya se encarga, no hacer nada
        if (porVista === 4) {
            tarjetasProc.forEach(t => {
                t.classList.add('activa');
            });
            return;
        }

        tarjetasProc.forEach((t, i) => {
            const visible = i >= indexProc && i < indexProc + porVista;
            t.classList.toggle('activa', visible);
        });
    }

    if (prevProc && nextProc) {
        nextProc.addEventListener('click', () => {
            const porVista = tarjetasPorVista();
            const maxIndex = tarjetasProc.length - porVista;
            indexProc = Math.min(indexProc + porVista, maxIndex);
            mostrarTarjetasProc();
        });

        prevProc.addEventListener('click', () => {
            const porVista = tarjetasPorVista();
            indexProc = Math.max(indexProc - porVista, 0);
            mostrarTarjetasProc();
        });
    }

    // Recalcula al cambiar el tamaño de ventana
    window.addEventListener('resize', () => {
        indexProc = 0;
        mostrarTarjetasProc();
    });

    mostrarTarjetasProc();
});