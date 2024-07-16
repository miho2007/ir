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

    // Function to start the camera with the back camera
    function startCamera(deviceId) {
        navigator.mediaDevices.getUserMedia({
            video: { deviceId: deviceId ? { exact: deviceId } : undefined }
        })
        .then(stream => {
            video.srcObject = stream;
            video.play();
        })
        .catch(error => {
            console.error("Error accessing the camera", error);
            alert(`Error accessing the camera: ${error.message}`);
        });
    }

    // Get the list of devices and find the back camera
    navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            const videoDevices = devices.filter(device => device.kind === 'videoinput');
            const backCamera = videoDevices.find(device => device.label.toLowerCase().includes('back')) || videoDevices[0];
            startCamera(backCamera.deviceId);
        })
        .catch(error => {
            console.error("Error enumerating devices", error);
            alert(`Error enumerating devices: ${error.message}`);
        });
});
