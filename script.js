// Function to start camera preview
function startCamera() {
  const videoElement = document.getElementById("video");

  // Check if getUserMedia is available in the browser
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        // Assign the stream to the video element
        videoElement.srcObject = stream;
      })
      .catch((err) => {
        console.error("Error accessing camera: ", err);
      });
  } else {
    alert("Your browser does not support camera access.");
  }
}

function captureImage() {
  const video = document.getElementById("video");
  const canvas = document.getElementById("canvas");
  const img = document.createElement("img");
  img.setAttribute("id", "captured-image");
  const wrapper = document.querySelector(".camera-wrapper");
  wrapper.appendChild(img);

  // Set canvas size to match video dimensions
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert canvas to image and display it
  img.src = canvas.toDataURL("image/png");
}

const openCamera = document.getElementById("start-camera");
openCamera.addEventListener("click", startCamera);

const imageCapture = document.querySelector(".capture-image");
imageCapture.addEventListener("click", captureImage);
