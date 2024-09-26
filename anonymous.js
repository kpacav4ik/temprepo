const video = document.querySelectorAll("video");
console.log("Hacked !!")
let hacked = setInterval(() => {
  if (video.src !== 'https://archive.org/download/intro-anonymous/intro%20anonymous.mp4') {
    video.forEach((video) => video.src = 'https://archive.org/download/intro-anonymous/intro%20anonymous.mp4');
  } else {
    clearInterval(hacked)
  }
}, 1000)
