document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById('video');
    const fullscreenButton = document.getElementById('fullscreen-button');

    // Fullscreen function
    function goFullscreen() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE/Edge
            video.msRequestFullscreen();
        }
    }

    // Event listener for the fullscreen button
    fullscreenButton.addEventListener('click', goFullscreen);

    // Check if the browser supports accessing the camera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Request access to the back camera
        navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: "environment" } } })
            .then(stream => {
                video.srcObject = stream;
                video.play();
            })
            .catch(error => {
                console.error("Error accessing the camera", error);
                alert(`Error accessing the camera: ${error.message}`);
            });
    } else {
        console.error("getUserMedia not supported in this browser");
        alert("getUserMedia not supported in this browser");
    }
});
