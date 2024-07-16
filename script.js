document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById('video');

    // Check if the browser supports accessing the camera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Request access to the camera
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                video.srcObject = stream;
                video.play();
            })
            .catch(error => {
                console.error("Error accessing the camera", error);
            });
    } else {
        console.error("getUserMedia not supported in this browser");
    }
});
