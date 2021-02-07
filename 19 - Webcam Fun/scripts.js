const video = document.querySelector(".player")
const canvas = document.querySelector(".photo")
const ctx = canvas.getContext("2d")
const strip = document.querySelector(".strip")
const snap = document.querySelector(".snap")

const getVideo = () => {
  window.navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      video.srcObject = stream
      video.play()
    })
    .catch((error) => {
      console.error("Oops, Something is wrong..")
    })
}
const greenScreen = (pixels) => {
  const levels = {}
  document.querySelectorAll(".rgb input").forEach((range) => {
    levels[range.name] = range.value
  })
  for (let i = 0; i < pixels.data.length - 4; i += 4) {
    const [red, green, blue, alpha] = pixels.data.slice(i, i + 3)
    if (
      red >= levels.rmin &&
      red <= levels.rmax &&
      green >= levels.gmin &&
      green <= levels.gmax &&
      blue >= levels.bmin &&
      blue <= levels.bmax
    ) {
      pixels.data[i + 3] = 0
    }
  }
  return pixels
}

const paintToCanvas = () => {
  canvas.width = video.videoWidth
  canvas.height = video.videoHeight

  return setInterval(() => {
    ctx.drawImage(video, 0, 0)
    let pixels = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const updatedPixels = greenScreen(pixels)
    ctx.putImageData(updatedPixels, 0, 0)
  }, 20)
}

video.addEventListener("canplay", paintToCanvas)

const takePhoto = () => {
  snap.play()
  const data = canvas.toDataURL("image/jpeg")
  const link = document.createElement("a")
  link.href = data
  link.setAttribute("download", "screenshot")
  link.innerHTML = `<img src="${data}" alt="screenshot"/>`
  strip.insertBefore(link, strip.firstChild)
}

getVideo()
