// Select all elements with the "stage" class
const stageImages = document.querySelectorAll(".stage");

// Loop through each image and attach the click event listener
stageImages.forEach(image => {
    image.addEventListener("click", () => {
        // Toggle the opacity between 0.5 (darker) and 1 (original) on each click
        image.style.opacity = image.style.opacity === '0.5' ? 1 : 0.5;
    });
});

// Add event listener for the fullscreen button
document.getElementById('fullscreen-btn').onclick = function() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
};