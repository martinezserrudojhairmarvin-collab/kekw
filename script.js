function cambiarPestania(event, idPestania) {
    // 1. Ocultar todas las secciones
    const secciones = document.querySelectorAll('.seccion-contenido');
    secciones.forEach(sec => sec.classList.remove('active'));

    // 2. Desactivar todos los botones
    const botones = document.querySelectorAll('.btn-tab');
    botones.forEach(btn => btn.classList.remove('active'));

    // 3. Mostrar la sección elegida y activar el botón presionado
    document.getElementById(idPestania).classList.add('active');
    event.currentTarget.classList.add('active');
}