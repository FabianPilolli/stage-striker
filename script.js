document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todas las imágenes con la clase 'stage'
    const stageImages = document.querySelectorAll('.stage');

    // Itera sobre cada imagen y añade un 'event listener' para el clic
    stageImages.forEach(image => {
        image.style.opacity = '1'; // Establece la opacidad inicial a 1

        image.addEventListener('click', () => {
            // Comprueba la opacidad actual y la cambia
            if (image.style.opacity === '1') {
                image.style.opacity = '0.5';
            } else {
                image.style.opacity = '1';
            }
        });
    });
});