document.addEventListener("DOMContentLoaded", () => {
    const fullscreenButton = document.getElementById('fullscreen-button');

    // Fullscreen function
    function goFullscreen() {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { // Firefox
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // IE/Edge
            elem.msRequestFullscreen();
        }
    }

    // Event listener for the fullscreen button
    fullscreenButton.addEventListener('click', goFullscreen);
});
