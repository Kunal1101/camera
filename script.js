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
  const img = document.getElementById("captured-image");
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

// Open Camera
const openCamera = document.getElementById("start-camera");
openCamera.addEventListener("click", () => {
  startCamera();

  document.querySelector(".camera-controls").classList.remove("hidden");
});

//  Capture image
const imageCapture = document.querySelector(".capture-image");
imageCapture.addEventListener("click", () => {
  captureImage();
  document.querySelector(".camera-controls").classList.add("hidden");
  document.querySelector("#reset-camera").classList.remove("hidden");
});

// Reset state
const resetBtn = document.getElementById("reset-camera");
resetBtn.addEventListener("click", () => {
  const capturedImageSrc = document.getElementById("captured-image");
  if (capturedImageSrc && capturedImageSrc.src !== "") {
    capturedImageSrc.src = "";
    resetBtn.classList.add("hidden");
    document.querySelector(".camera-controls").classList.remove("hidden");
  }
});

// Start Recording button
const recrodigBtn = document.querySelector(".record-video");
recrodigBtn.addEventListener("click", () => {
  recrodigBtn.classList.add("recording-started");
  document.getElementById("stop-recording").classList.remove("hidden");
});

// Stop Recording
const stopRecording = document.getElementById("stop-recording");
stopRecording.addEventListener("click", () => {
  recrodigBtn.classList.remove("recording-started");
  stopRecording.classList.add("hidden");
});
