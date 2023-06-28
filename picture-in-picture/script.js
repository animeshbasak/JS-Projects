const videoElement = document.getElementById('video')
const button = document.getElementById('button')
//prompt to select media stream , pass to video element , then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  }
  catch (error) {
    //catch errors
    console.error('whoops, error here:', error)
  }
}
button.addEventListener('click', async () => {
  //Disable button
  button.disabled = true;
  //start pip
  await videoElement.requestPictureInPicture();
  //reset button
  button.disabled = false;
})
//on load
selectMediaStream()