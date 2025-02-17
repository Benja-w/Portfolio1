// Función que mueve los cuadrados al hacer scroll con requestAnimationFrame para suavizar
window.addEventListener('scroll', function() {
    // Obtener la posición del scroll (cuánto se ha desplazado la página)
    var scrollPosition = window.scrollY;

    // Seleccionar los cuadrados
    var cuadradoIzquierda = document.querySelector('.cuadrado-izquierda');
    var cuadradoDerecha = document.querySelector('.cuadrado-derecha');

    // Ajustar la posición de los cuadrados en función del scroll, con diferentes velocidades
    cuadradoIzquierda.style.transform = 'translateY(' + (scrollPosition * -1) + 'px)';
    cuadradoDerecha.style.transform = 'translateY(' + (scrollPosition * -0.5) + 'px)';
});

