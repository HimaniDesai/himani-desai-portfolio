// // // Set the initial volume of the audio element
// // window.onload = function() {
// //     const audioElement = document.getElementById('bg-music');
    
// //     // Set the initial volume to 20%
// //     // audioElement.volume = 0.5; // Volume between 0.0 (mute) and 1.0 (max)
// //   };
// // Set the initial volume of the audio element when the page loads
// window.onload = function() {
//     const audioElement = document.getElementById('bg-music');
    
//     // Ensure the audio is playing, if not, play it
//     if (audioElement.paused) {
//       audioElement.play().then(() => {
//         // Once the audio starts, set the volume to 20%
//         audioElement.volume = 0.2;
//       }).catch((error) => {
//         console.error("Audio play failed:", error);
//       });
//     } else {
//       // If audio is already playing, just set the volume
//       audioElement.volume = 0.2;
//     }
//   };
  