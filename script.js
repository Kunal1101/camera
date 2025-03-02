// Function to start camera preview
function startCamera() {
    const videoElement = document.getElementById('video');

    // Check if getUserMedia is available in the browser
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
        // Assign the stream to the video element
        videoElement.srcObject = stream;
        })
        .catch(err => {
        console.error('Error accessing camera: ', err);
        });
    } else {
    alert('Your browser does not support camera access.');
    }
}

const openCamera = document.getElementById('start-camera');
openCamera.addEventListener('click', startCamera)
